// @ts-ignore
import { Server } from 'miragejs';

import consultants from './fixtures/consultants.json';

const makeServer = ({ environment = 'development' }) =>
  new Server({
    environment,
    fixtures: { consultants },
    seeds(server: { loadFixtures: (fixtureName: string) => void }) {
      server.loadFixtures('consultants');
    },
    routes() {
      this.namespace = 'api';
    },
  });

export default { makeServer };
