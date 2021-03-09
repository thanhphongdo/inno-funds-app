const Parse = require('parse');

export class ParseBase {
  static init() {
    Parse.initialize(process.env.VUE_APP_PARSE_APP_ID as any);
    Parse.serverURL = process.env.VUE_APP_PARSE_SERVER_URL as any;
  }

  static async runCloud<T>(name: string, data?: any): Promise<T> {
    const response = await Parse.Cloud.run(name, data || {});
    return response;
  }
}