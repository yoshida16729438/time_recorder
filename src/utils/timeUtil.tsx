export class time {
  private constructor(
    public readonly hour: number,
    public readonly minute: number
  ) {}

  public static getCurrent = () => {
    const now = new Date();
    return new time(now.getHours(), now.getMinutes());
  };

  /**
   * 文字列からtimeインスタンス作成
   * @param timeString H:mmまたはHH:mm形式文字列
   * @returns
   */
  public static fromString = (timeString: string) => {
    const spl = timeString.split(":");
    return new time(Number(spl[0]), Number(spl[1]));
  };

  public timeSpanFrom = (from: time) => {
    return timeSpan.between(from, this);
  };

  public getTimeString = () =>
    `${this.hour.toString().padStart(2, "0")}:${this.minute
      .toString()
      .padStart(2, "0")}`;
}

export class timeSpan {
  private constructor(
    public readonly hours: number,
    public readonly minutes: number
  ) {}

  public static between = (from: time, to: time) => {
    let hour = to.hour;
    let minute = to.minute;

    if (minute >= from.minute) minute -= from.minute;
    else {
      hour--;
      minute += 60 - from.minute;
    }

    hour -= from.hour;

    return new timeSpan(hour, minute);
  };
}
