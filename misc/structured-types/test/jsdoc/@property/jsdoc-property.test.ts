import path from 'path';
import { parseFiles } from '../../../src/index';

describe('@property', () => {
  it('enum', () => {
    const results = parseFiles([path.resolve(__dirname, 'enum.js')]);
    expect(results).toEqual({
      food: {
        displayName: 'food',
        kind: 15,
        properties: [
          {
            kind: 1,
            displayName: 'name',
            value: 'beef',
          },
          {
            kind: 1,
            displayName: 'type',
            value: 'meat',
          },
        ],
        type: 'Food',
      },
      Food: {
        displayName: 'Food',
        kind: 15,
        properties: [
          {
            kind: 1,
            displayName: 'name',
            description: 'What the food should be called',
          },
          {
            displayName: 'type',
            description: "The food's type",
            kind: 4,
            properties: [
              {
                kind: 1,
                value: 'meat',
              },
              {
                kind: 1,
                value: 'veggie',
              },
              {
                kind: 1,
                value: 'other',
              },
            ],
          },
        ],
      },
    });
  });
  it('nested', () => {
    const results = parseFiles([path.resolve(__dirname, 'nested.js')]);
    expect(results).toEqual({
      config: {
        displayName: 'config',
        kind: 15,
        properties: [
          {
            displayName: 'defaults',
            kind: 15,
            properties: [
              {
                kind: 2,
                displayName: 'players',
                value: 1,
              },
              {
                kind: 1,
                displayName: 'level',
                value: 'beginner',
              },
              {
                displayName: 'treasure',
                kind: 15,
                properties: [
                  {
                    kind: 2,
                    displayName: 'gold',
                    value: 0,
                  },
                ],
              },
            ],
          },
        ],
        type: 'Config',
      },
      Config: {
        displayName: 'Config',
        kind: 15,
        properties: [
          {
            displayName: 'defaults',
            kind: 15,
            properties: [
              {
                kind: 2,
                displayName: 'players',
                description: 'The default number of players.',
              },
              {
                kind: 1,
                displayName: 'level',
                description: 'The default level for the party.',
              },
              {
                displayName: 'treasure',
                kind: 15,
                properties: [
                  {
                    kind: 2,
                    displayName: 'gold',
                    description: 'How much gold the party starts with.',
                  },
                ],
                description: 'The default treasure.',
              },
            ],
            description: 'The default values for parties.',
          },
        ],
      },
    });
  });
  it('optional', () => {
    const results = parseFiles([path.resolve(__dirname, 'optional.js')]);
    expect(results).toEqual({
      user: {
        displayName: 'user',
        kind: 15,
        properties: [
          {
            kind: 1,
            displayName: 'email',
            value: 's',
          },
        ],
        description: 'User type definition',
        type: 'User',
      },
      User: {
        displayName: 'User',
        kind: 15,
        properties: [
          {
            kind: 1,
            displayName: 'email',
          },
          {
            displayName: 'nickName',
            kind: 1,
            optional: true,
          },
        ],
        description: 'User type definition',
      },
    });
  });
});
