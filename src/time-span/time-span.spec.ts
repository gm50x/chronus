import { ONE_DAY_MS, ONE_HOUR_MS, ONE_MINUTE_MS, ONE_SECOND_MS } from "../time-constants";
import { TimeSpan } from "./time-span";

const subject = TimeSpan.name;

describe(`${subject} Specs`, () => {
  it(`new ${subject} should return an instance of the ${subject} class`, () => {
    expect(new TimeSpan()).toBeInstanceOf(TimeSpan)
  })

  for (const scenario of [-5000, -1000, -500, -90, -60, -30, -5, -1, 0, 1, 5, 30, 60, 90, 500, 1000, 5000]) {
    it(`${subject}.fromMilliseconds(${scenario}) should correspond to ${scenario} milliseconds`, () => {
      expect(TimeSpan.fromMilliseconds(scenario).milliseconds).toStrictEqual(scenario)
    });
  }

  for (const scenario of [-5000, -1000, -500, -90, -60, -30, -5, -1, 0, 1, 5, 30, 60, 90, 500, 1000, 5000]) {
    it(`${subject}.fromSeconds(${scenario}) should correspond to ${scenario * ONE_SECOND_MS} milliseconds`, () => {
      expect(TimeSpan.fromSeconds(scenario).milliseconds).toStrictEqual(scenario * ONE_SECOND_MS)
    });
  }

  for (const scenario of [-5000, -1000, -500, -90, -60, -30, -5, -1, 0, 1, 5, 30, 60, 90, 500, 1000, 5000]) {
    it(`${subject}.fromMinutes(${scenario}) should correspond to ${scenario * ONE_MINUTE_MS} milliseconds`, () => {
      expect(TimeSpan.fromMinutes(scenario).milliseconds).toStrictEqual(scenario * ONE_MINUTE_MS)
    });
  }

  for (const scenario of [-5000, -1000, -500, -90, -60, -30, -5, -1, 0, 1, 5, 30, 60, 90, 500, 1000, 5000]) {
    it(`${subject}.fromHours(${scenario}) should correspond to ${scenario * ONE_HOUR_MS} milliseconds`, () => {
      expect(TimeSpan.fromHours(scenario).milliseconds).toStrictEqual(scenario * ONE_HOUR_MS)
    });
  }

  for (const scenario of [-5000, -1000, -500, -90, -60, -30, -5, -1, 0, 1, 5, 30, 60, 90, 500, 1000, 5000]) {
    it(`${subject}.fromDays(${scenario}) should correspond to ${scenario * ONE_DAY_MS} milliseconds`, () => {
      expect(TimeSpan.fromDays(scenario).milliseconds).toStrictEqual(scenario * ONE_DAY_MS)
    });
  }

  for (let scenario = -10; scenario <= 10; scenario += 2)
    it(`${subject}.fromDays(${scenario}) should be equivalent to ${subject}.fromHours(${scenario * 24})`, () => {
      expect(TimeSpan.fromDays(scenario).milliseconds).toStrictEqual(TimeSpan.fromHours(scenario * 24).milliseconds);
    });

  for (let scenario = -10; scenario <= 10; scenario += 2)
    it(`${subject}.fromHours(${scenario}) should be equivalent to ${subject}.fromMinutes(${scenario * 60})`, () => {
      expect(TimeSpan.fromHours(scenario).milliseconds).toStrictEqual(TimeSpan.fromMinutes(scenario * 60).milliseconds);
    });


  for (let scenario = -10; scenario <= 10; scenario += 2)
    it(`${subject}.fromMinutes(${scenario}) should be equivalent to ${subject}.fromSeconds(${scenario * 60})`, () => {
      expect(TimeSpan.fromMinutes(scenario).milliseconds).toStrictEqual(TimeSpan.fromSeconds(scenario * 60).milliseconds);
    });


  for (let scenario = -10; scenario <= 10; scenario += 2)
    it(`${subject}.fromSeconds(${scenario}) should be equivalent to ${subject}.fromMilliseconds(${scenario * 1000})`, () => {
      expect(TimeSpan.fromSeconds(scenario).milliseconds).toStrictEqual(TimeSpan.fromMilliseconds(scenario * 1000).milliseconds);
    });

  for (const scenario of [-5000, -1000, -500, -90, -60, -30, -5, -1, 0, 1, 5, 30, 60, 90, 500, 1000, 5000])
    it(`new ${subject}().addMilliseconds(${scenario}) should correspond to ${scenario} milliseconds`, () => {
      expect(new TimeSpan().addMilliseconds(scenario).milliseconds).toStrictEqual(scenario)
    });


  for (const scenario of [-5000, -1000, -500, -90, -60, -30, -5, -1, 0, 1, 5, 30, 60, 90, 500, 1000, 5000])
    it(`new ${subject}().addSeconds(${scenario}) should correspond to ${scenario * ONE_SECOND_MS} milliseconds`, () => {
      expect(new TimeSpan().addSeconds(scenario).milliseconds).toStrictEqual(scenario * ONE_SECOND_MS)
    });

  for (const scenario of [-5000, -1000, -500, -90, -60, -30, -5, -1, 0, 1, 5, 30, 60, 90, 500, 1000, 5000])
    it(`new ${subject}().addMinutes(${scenario}) should correspond to ${scenario * ONE_MINUTE_MS} milliseconds`, () => {
      expect(new TimeSpan().addMinutes(scenario).milliseconds).toStrictEqual(scenario * ONE_MINUTE_MS)
    });

  for (const scenario of [-5000, -1000, -500, -90, -60, -30, -5, -1, 0, 1, 5, 30, 60, 90, 500, 1000, 5000])
    it(`new ${subject}().addHours(${scenario}) should correspond to ${scenario * ONE_HOUR_MS} milliseconds`, () => {
      expect(new TimeSpan().addHours(scenario).milliseconds).toStrictEqual(scenario * ONE_HOUR_MS)
    });


  for (const scenario of [-5000, -1000, -500, -90, -60, -30, -5, -1, 0, 1, 5, 30, 60, 90, 500, 1000, 5000])
    it(`new ${subject}().addDays(${scenario}) should correspond to ${scenario * ONE_DAY_MS} milliseconds`, () => {
      expect(new TimeSpan().addDays(scenario).milliseconds).toStrictEqual(scenario * ONE_DAY_MS)
    });

  it('cascading methods adds up to forming a timespan', () => {
    const actual = new TimeSpan().addDays(1).addHours(12).addMinutes(30).addSeconds(30).addMilliseconds(500);
    const expected = ONE_DAY_MS + 12 * ONE_HOUR_MS + 30 * ONE_MINUTE_MS + 30 * ONE_SECOND_MS + 500;
    expect(actual.milliseconds).toStrictEqual(expected);
  });

  it(`${subject}.add() should add up two timespans`, () => {
    const actual = TimeSpan.fromHours(1).add(TimeSpan.fromHours(2))
    const expected = 3 * ONE_HOUR_MS;
    expect(actual.milliseconds).toStrictEqual(expected);
  });

  it(`${subject}.add() should not alter the original reference, being immutable`, () => {
    const ref = TimeSpan.fromDays(1);
    const expected = ref.milliseconds;
    ref.add(TimeSpan.fromHours(2))
    expect(ref.milliseconds).toStrictEqual(expected);
  });

  for (const scenario of ['addMilliseconds', 'addSeconds', 'addMinutes', 'addHours', 'addDays'])
    it(`${subject}.${scenario} should not alter the original reference, being immutable`, () => {
      const ref = TimeSpan.fromDays(1);
      const expected = ref.milliseconds;
      ref[scenario](5);
      expect(ref.milliseconds).toStrictEqual(expected);
    });
});