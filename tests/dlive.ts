import SocialBlade, { DLiveUser } from '../lib/index';

import 'isomorphic-unfetch';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('DLive Client API', function () {
  before('Create Social Blade Client', async function () {
    this.client = new SocialBlade(process.env.SOCIALBLADE_CLIENT_ID!, process.env.SOCIALBLADE_ACCESS_TOKEN!);
  });

  describe('DLive User', function () {
    before('Create Social Blade Client', async function () {
      this.sbStats = await this.client.dlive.user('socialblade');
    });

    it('Social Blade has more than 2 followers?', async function () {
      expect((this.sbStats as DLiveUser).statistics.total.followers).to.be.greaterThan(2);
    });

    it('followers should be a number', async function () {
      expect((this.sbStats as DLiveUser).statistics.total.followers).to.be.a('number');
    });

    it('History should contain 30 days', async function () {
      expect((this.sbStats as DLiveUser).daily.length).to.be.eq(30);
    });
  });
});
