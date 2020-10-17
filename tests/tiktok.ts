import SocialBlade, { TikTokTop, TikTokUser } from '../lib/index';

import 'isomorphic-unfetch';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('TikTok Client API', function () {
  before('Create Social Blade Client', async function () {
    this.client = new SocialBlade(process.env.SOCIALBLADE_CLIENT_ID!, process.env.SOCIALBLADE_ACCESS_TOKEN!);
  });

  describe('TikTok User', function () {
    before('Create Social Blade Client', async function () {
      this.sbStats = await this.client.tiktok.user('socialblade');
    });

    it('Social Blade has more than 2 followers?', async function () {
      expect((this.sbStats as TikTokUser).statistics.total.followers).to.be.greaterThan(2);
    });

    it('followers should be a number', async function () {
      expect((this.sbStats as TikTokUser).statistics.total.followers).to.be.a('number');
    });

    it('History should contain 30 days', async function () {
      expect((this.sbStats as TikTokUser).daily.length).to.be.eq(30);
    });
  });

  describe('TikTok Top Lists', function () {
    before('Create Social Blade Client', async function () {
      this.sbTop = await this.client.tiktok.top('followers', 0);
    });

    it('Should have 5 users', async function () {
      expect((this.sbTop as TikTokTop[]).length).to.be.eq(5);
    });

    it('All users should have more the 40m followers', async function () {
      (this.sbTop as TikTokTop[]).map((user) => expect(user.statistics.total.followers).to.be.greaterThan(4e7));
    });
  });
});
