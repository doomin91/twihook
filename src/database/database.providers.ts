import { DataSource } from 'typeorm';

export const databaseProviders = [{
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: '3.39.30.117',
        port: 5432,
        username: 'postgres',
        password: 'enddl1!530',
        database: 'twihook',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        logging: true,
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
]