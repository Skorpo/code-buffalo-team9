module.exports = {
    Query: {
      activity: (_, type, { dataSources }) => 
        dataSources.ActivityAPI.getActivityByType(type),
    }
  };