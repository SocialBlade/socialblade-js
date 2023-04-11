import SocialBlade, { StoryFireUser } from '../lib/index';

import { describe, it } from 'mocha';
import { expect } from 'chai';

describe('StoryFire Client API', function () {
  before('Create Social Blade Client', async function () {
    this.client = new SocialBlade(
      process.env.SOCIALBLADE_CLIENT_ID!,
      process.env.SOCIALBLADE_ACCESS_TOKEN!,
    );
  });

  describe('StoryFire User', function () {
    before('Create Social Blade Client', async function () {
      this.sbStats = await this.client.storyfire.user('socialblade');
    });

    it('Social Blade has more than 2 followers?', async function () {
      expect(
        (this.sbStats as StoryFireUser).statistics.total.followers,
      ).to.be.greaterThan(2);
    });

    it('followers should be a number', async function () {
      expect(
        (this.sbStats as StoryFireUser).statistics.total.followers,
      ).to.be.a('number');
    });

    it('History should contain 30 days', async function () {
      expect((this.sbStats as StoryFireUser).daily.length).to.be.eq(30);
    });

    it('Growth should be a number', async function () {
      expect(
        (this.sbStats as StoryFireUser).statistics.growth.followers[30],
      ).to.be.a('number');
      expect(
        (this.sbStats as StoryFireUser).statistics.growth.views[30],
      ).to.be.a('number');
      expect(
        (this.sbStats as StoryFireUser).statistics.growth.videos[30],
      ).to.be.a('number');
    });
  });
});
