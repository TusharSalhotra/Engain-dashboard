'use client';

import Image from 'next/image';
import type { ChangeEvent } from 'react';
import { useMemo, useState } from 'react';
import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';

const featureCards = [
  {
    label: 'See the opportunity for your business on Reddit',
    iconSrc: '/assets/strike.png',
  },
  {
    label: 'Get a free 360° Reddit Opportunity Scan',
    iconSrc: '/assets/scanning.png',
  },
  {
    label: 'See Engain in action & how it works',
    iconSrc: '/assets/flash-circle.png',
  },
];

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekdayLabels = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const availableTimes = ['10:00 AM', '11:30 AM', '2:00 PM', '4:30 PM'];

type BookingForm = {
  phone: string;
  firstName: string;
  lastName: string;
};

type BookingField = keyof BookingForm;

type CalendarDay = {
  key: string;
  day?: number;
  disabled?: boolean;
};

function getMonthDays(month: number, year: number): CalendarDay[] {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  return [
    ...Array.from({ length: firstDay }, (_, index) => ({ key: `empty-${index}` })),
    ...Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1;
      const date = new Date(year, month, day);
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      return {
        key: `${year}-${month}-${day}`,
        day,
        disabled: isWeekend,
      };
    }),
  ];
}

export default function BookingSection() {
  const [activeCard, setActiveCard] = useState(1);
  const [form, setForm] = useState<BookingForm>({
    phone: '+1',
    firstName: '',
    lastName: '',
  });
  const [accepted, setAccepted] = useState(false);
  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const visibleDate = new Date(2026, 1 + monthOffset, 1);
  const visibleMonth = visibleDate.getMonth();
  const visibleYear = visibleDate.getFullYear();
  const days = useMemo(
    () => getMonthDays(visibleMonth, visibleYear),
    [visibleMonth, visibleYear],
  );

  const formComplete =
    form.phone.trim().length > 1 &&
    form.firstName.trim().length > 1 &&
    form.lastName.trim().length > 1 &&
    accepted;

  const bookingReady = formComplete && selectedDay && selectedTime;

  function updateField(field: BookingField, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  }

  function handleContinue() {
    setSubmitted(true);
  }

  return (
    <section className="booking-section" id="pricing" aria-labelledby="booking-title">
      <div className="booking-bg-rings" aria-hidden="true" />

      <div className="booking-cards" aria-label="Booking benefits">
        {featureCards.map((card, index) => {
          return (
            <Button
              className={`booking-card ${activeCard === index ? 'active' : ''}`}
              key={card.label}
              onClick={() => setActiveCard(index)}
              type="button"
              variant="unstyled"
            >
              <span className="booking-card-icon">
                <Image
                  alt=""
                  aria-hidden="true"
                  className="booking-card-icon-image"
                  height={20}
                  src={card.iconSrc}
                  width={20}
                />
              </span>
              <span>{card.label}</span>
            </Button>
          );
        })}
      </div>

      <div className="booking-paths" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="scheduler">
        <div className="scheduler-steps">
          <span className="active">Fill out the form</span>
          <span className={formComplete ? 'active muted-active' : ''}>Book your event</span>
        </div>

        <div className="scheduler-grid">
          <form className="scheduler-form" onSubmit={(event) => event.preventDefault()}>
            <Image
                alt="iClosed"
                className="closed-logo-icon"
                height={50}
                src="/assets/iclosed.png"
                width={50}
              />
            <h2 id="booking-title">Book Your Engain Strategy Call</h2>

            <p className="scheduler-subtitle">Use this Scheduler to:</p>
            <ul>
              <li>Access pre-approved, high-trust ad accounts</li>
              <li>Launch campaigns faster with fewer restrictions</li>
              <li>Scale spend safely without sudden bans</li>
              <li>Get expert support to optimize performance</li>
            </ul>

            <label className="field-label" htmlFor="phone">
              Try it for yourself
            </label>
            <div className="phone-field">
              <Button className="country-select" type="button" aria-label="Change country" variant="unstyled">
                🇺🇸
                <ChevronDown size={12} />
              </Button>
              <Input
                id="phone"
                name="phone"
                onChange={(event: ChangeEvent<HTMLInputElement>) => updateField('phone', event.target.value)}
                value={form.phone}
              />
            </div>

            <div className="name-row">
              <Input
                aria-label="First name"
                className="scheduler-text-input"
                onChange={(event: ChangeEvent<HTMLInputElement>) => updateField('firstName', event.target.value)}
                placeholder="First name *"
                value={form.firstName}
              />
              <Input
                aria-label="Last name"
                className="scheduler-text-input"
                onChange={(event: ChangeEvent<HTMLInputElement>) => updateField('lastName', event.target.value)}
                placeholder="Last name *"
                value={form.lastName}
              />
            </div>

            <label className="consent-row">
              <Checkbox
                checked={accepted}
                className="consent-checkbox"
                onCheckedChange={(checked) => setAccepted(checked === true)}
              />
              <span>
                By entering your information, you consent to your data being saved in
                accordance with our <a href="/terms">Terms</a> &amp;{' '}
                <a href="/privacy-policy">Privacy Policy</a> and to receive text messages.
              </span>
            </label>

            <Button
              className="continue-button"
              disabled={!formComplete}
              onClick={handleContinue}
              type="button"
              variant="unstyled"
            >
              Continue
              <ChevronRight size={16} />
            </Button>
          </form>

          <div className={`calendar-panel ${formComplete ? 'ready' : ''}`}>
            <div className="calendar-head">
              <h3>
                {monthNames[visibleMonth]} {visibleYear}
              </h3>
              <div className="calendar-controls">
                <Button
                  aria-label="Previous month"
                  disabled={monthOffset === 0}
                  onClick={() => setMonthOffset((current) => Math.max(0, current - 1))}
                  type="button"
                  variant="unstyled"
                >
                  <ChevronLeft size={18} />
                </Button>
                <Button
                  aria-label="Next month"
                  onClick={() => setMonthOffset((current) => current + 1)}
                  type="button"
                  variant="unstyled"
                >
                  <ChevronRight size={18} />
                </Button>
              </div>
            </div>

            <div className="calendar-grid" aria-label="Choose a date">
              {weekdayLabels.map((weekday) => (
                <span className="weekday" key={weekday}>
                  {weekday}
                </span>
              ))}
              {days.map((date) =>
                date.day ? (
                  <Button
                    className={selectedDay === date.day ? 'selected' : ''}
                    disabled={!formComplete || date.disabled}
                    key={date.key}
                    onClick={() => {
                      setSelectedDay(date.day ?? null);
                      setSubmitted(false);
                    }}
                    type="button"
                    variant="unstyled"
                  >
                    {date.day}
                  </Button>
                ) : (
                  <span key={date.key} />
                ),
              )}
            </div>

            {!formComplete ? (
              <div className="calendar-message">
                Please fill out the form before choosing your time slot.
              </div>
            ) : (
              <div className="time-panel">
                <p>
                  <CalendarDays size={15} />
                  {selectedDay
                    ? `Available times for ${monthNames[visibleMonth]} ${selectedDay}`
                    : 'Choose a date to view available times'}
                </p>
                <div className="time-options">
                  {availableTimes.map((time) => (
                    <Button
                      className={selectedTime === time ? 'selected' : ''}
                      disabled={!selectedDay}
                      key={time}
                      onClick={() => {
                        setSelectedTime(time);
                        setSubmitted(false);
                      }}
                      type="button"
                      variant="unstyled"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="scheduler-footer">
          {submitted && bookingReady ? (
            <span>
              Strategy call selected for {monthNames[visibleMonth]} {selectedDay}, {visibleYear} at{' '}
              {selectedTime}.
            </span>
          ) : (
            <span />
          )}
          <strong className="scheduler-footer-brand">
            <span className="scheduler-footer-powered">Powered by</span>
            <span className="scheduler-footer-brand-name">
              <Image
                alt="iClosed"
                className="scheduler-footer-brand-icon"
                height={50}
                src="/assets/iclosed.png"
                width={50}
              />
            </span>
          </strong>
        </div>
      </div>
    </section>
  );
}
