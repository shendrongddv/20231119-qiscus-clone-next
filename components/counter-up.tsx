"use client";

import CountUp from "react-countup";

type CounterUpProps = {
  end: number;
  start?: number | 0;
  prefix?: string;
  suffix?: string;
  enableScrollSpy?: boolean;
  scrollSpyOnce?: boolean;
};

export const CounterUp = ({
  end,
  start,
  prefix,
  suffix,
  enableScrollSpy,
  scrollSpyOnce,
}: CounterUpProps) => {
  return (
    <CountUp
      start={start}
      prefix={prefix}
      suffix={suffix}
      enableScrollSpy={enableScrollSpy}
      scrollSpyOnce={scrollSpyOnce}
      end={end}
      separator="."
      delay={0}
    />
  );
};
