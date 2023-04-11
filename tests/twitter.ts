import SocialBlade, { TwitterTop, TwitterUser } from '../lib/index';

import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('Twitter Client API', function () {
  before('Create Social Blade Client', async function () {
    this.client = new SocialBlade(
      process.env.SOCIALBLADE_CLIENT_ID!,
      process.env.SOCIALBLADE_ACCESS_TOKEN!,
    );
  });

  describe('Twitter User', function () {
    before('Create Social Blade Client', async function () {
      this.sbStats = await this.client.twitter.user('socialblade');
    });

    it('Social Blade has more than 100k subs?', async function () {
      expect(
        (this.sbStats as TwitterUser).statistics.total.followers,
      ).to.be.greaterThan(1e5);
    });

    it('followers should be a number', async function () {
      expect((this.sbStats as TwitterUser).statistics.total.followers).to.be.a(
        'number',
      );
    });

    it('Growth should be a number', async function () {
      expect(
        (this.sbStats as TwitterUser).statistics.growth.followers[30],
      ).to.be.a('number');
      expect(
        (this.sbStats as TwitterUser).statistics.growth.tweets[30],
      ).to.be.a('number');
    });

    it('History should contain 30 days', async function () {
      expect((this.sbStats as TwitterUser).daily.length).to.be.eq(30);
    });
  });

  describe('Twitter Top Lists', function () {
    before('Create Social Blade Client', async function () {
      this.sbTop = await this.client.twitter.top('followers', 0);
    });

    it('Should have 5 users', async function () {
      expect((this.sbTop as TwitterTop[]).length).to.be.eq(5);
    });

    it('All users should have more the 50m followers', async function () {
      (this.sbTop as TwitterTop[]).map((user) =>
        expect(user.statistics.total.followers).to.be.greaterThan(5e7),
      );
    });
  });
});
