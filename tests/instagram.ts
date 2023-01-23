import SocialBlade, { InstagramTop, InstagramUser } from '../lib/index';

import { describe, it } from 'mocha';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('Instagram Client API', function () {
  before('Create Social Blade Client', async function () {
    this.client = new SocialBlade(
      process.env.SOCIALBLADE_CLIENT_ID!,
      process.env.SOCIALBLADE_ACCESS_TOKEN!,
    );
  });

  describe('Instagram User', function () {
    before('Create Social Blade Client', async function () {
      this.sbStats = await this.client.instagram.user('socialblade');
    });

    it('Social Blade has more than 50 followers?', async function () {
      expect(
        (this.sbStats as InstagramUser).statistics.total.followers,
      ).to.be.greaterThan(50);
    });

    it('Followers should be a number', async function () {
      expect(
        (this.sbStats as InstagramUser).statistics.total.followers,
      ).to.be.a('number');
    });

    it('History should contain 30 days', async function () {
      expect((this.sbStats as InstagramUser).daily.length).to.be.eq(30);
    });
  });

  describe('Instagram Vault', function () {
    it('Should fulfill', async function () {
      return expect(this.client.instagram.user('socialblade', 'vault')).to.be
        .fulfilled;
    });
  });

  describe('Instagram Top Lists', function () {
    before('Create Social Blade Client', async function () {
      this.sbTop = await this.client.instagram.top('followers', 0);
    });

    it('Should have 5 users', async function () {
      expect((this.sbTop as InstagramTop[]).length).to.be.eq(5);
    });

    it('All users should have more the 600k followers', async function () {
      (this.sbTop as InstagramTop[]).map((user) =>
        expect(user.statistics.total.followers).to.be.greaterThan(6e6),
      );
    });
  });
});
