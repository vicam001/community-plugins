/*
  Copyright 2020-2023 Lowdefy, Inc

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

export default {
  $schema: 'http://json-schema.org/draft-07/schema#',
  title: 'Lowdefy Request Schema - MongoDBInsertConsecutiveId',
  type: 'object',
  required: ['doc'],
  properties: {
    doc: {
      type: 'object',
      description: 'The document to be inserted.',
      errorMessage: {
        type: 'MongoDBInsertConsecutiveId request property "doc" should be an object.',
      },
    },
    options: {
      type: 'object',
      description: 'Optional settings.',
      errorMessage: {
        type: 'MongoDBInsertConsecutiveId request property "options" should be an object.',
      },
    },
    prefix: {
      type: 'string',
      description: 'Prefix to add to _id.',
      errorMessage: {
        type: 'MongoDBInsertConsecutiveId request property "options" should be an object.',
      },
    },
    length: {
      type: 'number',
      description: 'The numeric ID will be padded to this number of digits.',
      errorMessage: {
        type: 'MongoDBInsertConsecutiveId request property "options" should be an object.',
      },
    },
  },
  errorMessage: {
    type: 'MongoDBInsertConsecutiveId request properties should be an object.',
    required: 'MongoDBInsertOne request should have required property "doc".',
  },
};
