import { useCycle } from '../hooks/useCycle';
import { getCalendarGridDays } from '../utils/dateHelpers';
import { 
  PageLayout, 
  Card, 
  SubHeading,
  BodyText,
  CalendarDay,
  Chip 
} from '../design/components';
import { BRAND } from '../design/tokens';

export function CalendarView() {
  const { lastPeriodEndDate } = useCycle();
  
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const calendarDays = getCalendarGridDays(currentYear, currentMonth, lastPeriodEndDate);

  return (
    <PageLayout>
      <div style={{ marginBottom: 24 }}>
        <SubHeading size={32} style={{ marginBottom: 8 }}>
          Cycle Calendar
        </SubHeading>
        <BodyText secondary>
          View your supplement schedule for the month.
        </BodyText>
      </div>

      <Card style={{ marginBottom: 20 }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: 16,
          flexWrap: 'wrap',
          gap: 12
        }}>
          <SubHeading size={20}>
            {monthNames[currentMonth]} {currentYear}
          </SubHeading>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Chip color={BRAND.burgundy}>Replenish · Days 1–14</Chip>
            <Chip color={BRAND.gold}>Balance · Days 15–28</Chip>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: 4,
          marginBottom: 4,
        }}>
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
            <div key={d} style={{
              textAlign: 'center',
              fontSize: 11,
              fontWeight: 500,
              color: BRAND.textSecondary,
              letterSpacing: '0.04em',
              padding: '4px 0',
            }}>
              {d}
            </div>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: 4,
        }}>
          {calendarDays.map((dayData, index) => (
            <CalendarDay
              key={index}
              day={dayData.day}
              phase={dayData.phase}
              isToday={dayData.isToday}
              isEmpty={dayData.isEmpty}
            />
          ))}
        </div>
      </Card>

      {!lastPeriodEndDate && (
        <Card style={{ textAlign: 'center', backgroundColor: BRAND.burgundyLight }}>
          <SubHeading size={18} style={{ marginBottom: 8 }}>
            No Cycle Data
          </SubHeading>
          <BodyText secondary size={14}>
            Set your cycle start date in Settings to see your supplement schedule.
          </BodyText>
        </Card>
      )}

      {lastPeriodEndDate && (
        <Card>
          <SubHeading size={18} style={{ marginBottom: 8 }}>
            Legend
          </SubHeading>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 32,
                height: 32,
                backgroundColor: BRAND.burgundyLight,
                borderRadius: 6,
                border: `1.5px solid transparent`,
              }} />
              <BodyText size={14}>
                Replenish (Follicular Phase)
              </BodyText>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 32,
                height: 32,
                backgroundColor: BRAND.goldLight,
                borderRadius: 6,
                border: `1.5px solid transparent`,
              }} />
              <BodyText size={14}>
                Balance (Luteal Phase)
              </BodyText>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{
                width: 32,
                height: 32,
                backgroundColor: BRAND.burgundy,
                borderRadius: 6,
                border: `1.5px solid ${BRAND.burgundy}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: BRAND.white,
                fontSize: 12,
                fontWeight: 600,
              }}>
                •
              </div>
              <BodyText size={14}>
                Today
              </BodyText>
            </div>
          </div>
        </Card>
      )}
    </PageLayout>
  );
}
