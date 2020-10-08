import SocialBlade, { TwitchTop, TwitchUser } from '../lib/index';

import 'isomorphic-unfetch';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('Twitch Client API', function () {
  before('Create Social Blade Client', async function () {
    this.client = new SocialBlade(
      process.env.SOCIALBLADE_CLIENT_ID!,
      process.env.SOCIALBLADE_ACCESS_TOKEN!,
    );
  });

  describe('Twitch User', function () {
    before('Create Social Blade Client', async function () {
      this.sbStats = await this.client.twitch.user('socialblade');
    });

    it('Social Blade has more than 50 subs?', async function () {
      expect(
        (this.sbStats as TwitchUser).statistics.total.followers,
      ).to.be.greaterThan(50);
    });

    it('followers should be a number', async function () {
      expect((this.sbStats as TwitchUser).statistics.total.followers).to.be.a(
        'number',
      );
    });

    it('History should contain 30 days', async function () {
      expect((this.sbStats as TwitchUser).daily.length).to.be.eq(30);
    });
  });

  describe('Twitch Top Lists', function () {
    before('Create Social Blade Client', async function () {
      this.sbTop = await this.client.twitch.top('followers', 0);
    });

    it('Should have 5 users', async function () {
      expect((this.sbTop as TwitchTop[]).length).to.be.eq(5);
    });

    it('All users should have more the 10m followers', async function () {
      (this.sbTop as TwitchTop[]).map((user) =>
        expect(user.statistics.total.followers).to.be.greaterThan(6e6),
      );
    });
  });
});
