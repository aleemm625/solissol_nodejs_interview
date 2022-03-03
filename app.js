// run project using command Yarn start-dev or npm run start-dev
import * as mongoose from './db/db_connection.js';

import { Post } from './db/schema/posts.js';
import { Comment } from './db/schema/comments.js';
import { Nfts } from './db/schema/nfts.js';

//data imports
import { teams } from './data/teams.js';
import { players } from './data/players.js';

// module imports
import { teamResult } from './src/task1.js'; // time spent 01:30 hrs
import { minimumPlayTimeWithHighestGoalScored } from './src/task2.js'; // time spent 00:20 hrs
import { otherNumber } from './src/task3.js'; // spent time 00:20 hrs
import { getActivePostsWithActiveComments } from './src/task4.js'; // time spent 01:00 hrs
import { getNfts } from './src/task5.js'; // spect time 00:30 hrs

//uncomment logs one by one to check the output
const getPosts = async () => {
  const dbNfts = await getNfts({
    name: 'uja vs levski',
    type: 'Ticket',
    groupId: '618a106762fc3e0d6769881d',
  });
  const dbPosts = await getActivePostsWithActiveComments();

  //   console.log(teamResult(teams));
  //   console.log(minimumPlayTimeWithHighestGoalScored(players));
  //   console.log(dbPosts);
  //   console.log(dbNfts);
  //   console.log(otherNumber(3));
};

getPosts();
