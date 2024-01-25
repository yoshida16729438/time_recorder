export class Time {
  private constructor(
    public readonly hour: number,
    public readonly minute: number
  ) {}

  public static getCurrent = () => {
    const now = new Date();
    return new Time(now.getHours(), now.getMinutes());
  };

  /**
   * 文字列からtimeインスタンス作成
   * @param timeString H:mmまたはHH:mm形式文字列
   * @returns
   */
  public static fromString = (timeString: string) => {
    const spl = timeString.split(":");
    return new Time(Number(spl[0]), Number(spl[1]));
  };

  public timeSpanFrom = (from: Time) => {
    return TimeSpan.between(from, this);
  };

  public getTimeString = () =>
    `${this.hour.toString().padStart(2, "0")}:${this.minute
      .toString()
      .padStart(2, "0")}`;

  public orMore = (compareTo: Time) => {
    return this.timeSpanFrom(compareTo).hours >= 0;
  };
}

export class TimeSpan {
  private constructor(
    public readonly hours: number,
    public readonly minutes: number
  ) {}

  public static between = (from: Time, to: Time) => {
    let hour = to.hour;
    let minute = to.minute;

    if (minute >= from.minute) minute -= from.minute;
    else {
      hour--;
      minute += 60 - from.minute;
    }

    hour -= from.hour;

    return new TimeSpan(hour, minute);
  };

  public plus = (target: TimeSpan) => {
    let minutes = this.minutes + target.minutes;
    let hours = this.hours + target.hours;
    if (minutes >= 60) {
      minutes -= 60;
      hours += 1;
    }
    return new TimeSpan(hours, minutes);
  };
}
