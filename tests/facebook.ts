import SocialBlade, { FacebookTop, FacebookUser } from '../lib/index';

import 'isomorphic-unfetch';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('Facebook Client API', function () {
  before('Create Social Blade Client', async function () {
    this.client = new SocialBlade(process.env.SOCIALBLADE_CLIENT_ID!, process.env.SOCIALBLADE_ACCESS_TOKEN!);
  });

  describe('Facebook User', function () {
    before('Create Social Blade Client', async function () {
      this.sbStats = await this.client.facebook.user('socialblade');
    });

    it('Social Blade has more than 50 likes?', async function () {
      expect((this.sbStats as FacebookUser).statistics.total.likes).to.be.greaterThan(50);
    });

    it('Likes should be a number', async function () {
      expect((this.sbStats as FacebookUser).statistics.total.likes).to.be.a('number');
    });

    it('History should contain 30 days', async function () {
      expect((this.sbStats as FacebookUser).daily.length).to.be.eq(30);
    });
  });

  describe('Facebook Top Lists', function () {
    before('Create Social Blade Client', async function () {
      this.sbTop = await this.client.facebook.top('likes', 0);
    });

    it('Should have 5 users', async function () {
      expect((this.sbTop as FacebookTop[]).length).to.be.eq(5);
    });

    it('All users should have more the 100M likes', async function () {
      (this.sbTop as FacebookTop[]).map((user) => expect(user.statistics.total.likes).to.be.greaterThan(1e8));
    });
  });
});
