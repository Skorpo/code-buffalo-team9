const { RESTDataSource } = require('apollo-datasource-rest');

class BoredAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.boredapi.com/api/';
  }

  async getAllActivities() {
    const response = await this.get('activity');
    return Array.isArray(response)
      ? response.map(activity => this.activityReducer(activity))
      : [];
  }

  activityReducer(activity) {
    return {
      id: activity.activity || 0,
      cursor: `${activity.type}`,
    };
  }

  async getActivityByType({ type }) {
    console.log("Need to get type " + type)
    const response = await this.get('activity?type=' + type, { activity: type });
    console.log("HERE'S WHAT I GOT");
    console.log(response);
    return response;
  }

  /*async get(endpoint, props){
    const json = require('./stuff.json');
    var obj = JSON.parse('./stuff.json');

    console.log(json.activity);
  }*/
}

module.exports = BoredAPI;