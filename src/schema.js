const { gql } = require('apollo-server');

const typeDefs = gql`

  type Query {
    activities: [Activity]
    activity(type: String): Activity
  }
  
  type Activity {
      activity: String
      accesibility: Float
      type: String
      participants: Int
      price: Float
      link: String
      key: Int
  }

type Mutation {
  # If false, check error logs - 
  return_activity(Activity: String): TripUpdateResponse!

}

type TripUpdateResponse {
  success: Boolean!
  message: String
  Activity: [Activity]
}

`;

module.exports = typeDefs;