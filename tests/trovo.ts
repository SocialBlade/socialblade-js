import SocialBlade, { TrovoUser } from '../lib/index';

import 'isomorphic-unfetch';
import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('Trovo Client API', function () {
  before('Create Social Blade Client', async function () {
    this.client = new SocialBlade(process.env.SOCIALBLADE_CLIENT_ID!, process.env.SOCIALBLADE_ACCESS_TOKEN!);
  });

  describe('Trovo User', function () {
    before('Create Social Blade Client', async function () {
      this.sbStats = await this.client.trovo.user('socialblade');
    });

    it('Social Blade has more than 1 follower1?', async function () {
      expect((this.sbStats as TrovoUser).statistics.total.followers).to.be.greaterThan(1);
    });

    it('followers should be a number', async function () {
      expect((this.sbStats as TrovoUser).statistics.total.followers).to.be.a('number');
    });

    it('History should contain more than 7 days', async function () {
      expect((this.sbStats as TrovoUser).daily.length).to.be.greaterThan(7);
    });
  });
});
