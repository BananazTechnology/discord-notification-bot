export class Config {
  // User attributes. Should always be private as updating information will need to be reflected in the db
  private cronRegex?: string;
  private channelId?: string;
  private message?: string;
  private timezone?: string;

  // constructor is private. User object sould be created by one of the get or create commands
  public constructor (cronRegex?: string, channelId?: string, message?: string, timezone?: string) {
    this.cronRegex = cronRegex;
    this.channelId = channelId;
    this.message = message;
    this.timezone = timezone;
  }

  // Getters
  public getCron () : string {
    return this.cronRegex ? this.cronRegex : "";
  }

  public getChannelId () : string {
    return this.channelId ? this.channelId : "";
  }

  public getMessage () : string {
    return this.message ? this.message : "";
  }

  public getTimezone () : string {
    return this.timezone ? this.timezone : "America/New_York";
  }

  // Setters
  public setCron (cronRegex: string) {
    this.cronRegex = cronRegex;
  }

  public setChannelId (channelId: string) {
    this.channelId = channelId;
  }

  public setMessage (message: string) {
    this.message = message;
  }

  public setTimezone (timezone: string) {
    this.timezone = timezone;
  }

}
