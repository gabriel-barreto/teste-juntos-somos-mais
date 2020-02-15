// @ts-ignore
import { Server, Model } from 'miragejs';

import consultants from './fixtures/consultants.json';

function makeServer({ environment = 'development' }) {
  return new Server({
    environment,
    fixtures: { consultants },
    models: {
      consultants: Model,
    },
    seeds(server: { loadFixtures: (fixtureName: string) => void }) {
      server.loadFixtures('consultants');
    },
    routes() {
      this.namespace = 'api';
      this.resource('consultants');
    },
  });
}

export default { makeServer };
