import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCycle } from '../hooks/useCycle';
import { formatDate } from '../utils/dateHelpers';
import { 
  PageLayout, 
  Card, 
  SubHeading, 
  BodyText, 
  DateInput,
  PrimaryButton,
  OutlineButton,
  Divider 
} from '../design/components';
import { BRAND } from '../design/tokens';

export function SettingsView() {
  const navigate = useNavigate();
  const { lastPeriodEndDate, cycleLength, updateEndDate, resetCycle } = useCycle();
  
  const [tempEndDate, setTempEndDate] = useState(
    lastPeriodEndDate ? formatDate(lastPeriodEndDate, 'yyyy-MM-dd') : ''
  );
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleSave = () => {
    if (tempEndDate) {
      // Validate the date
      const selectedDate = new Date(tempEndDate);
      const today = new Date();
      
      // Check if date is valid
      if (isNaN(selectedDate.getTime())) {
        alert('Please enter a valid date.');
        return;
      }
      
      // Warn if date is in the far past (more than 1 year ago)
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      
      if (selectedDate < oneYearAgo) {
        const confirmOldDate = window.confirm(
          'The date you entered is more than a year ago. Are you sure this is correct?'
        );
        if (!confirmOldDate) return;
      }
      
      // Warn if date is in the future (more than 7 days)
      const oneWeekFromNow = new Date();
      oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
      
      if (selectedDate > oneWeekFromNow) {
        const confirmFutureDate = window.confirm(
          'The date you entered is in the future. Are you sure this is correct?'
        );
        if (!confirmFutureDate) return;
      }
      
      updateEndDate(tempEndDate);
      navigate('/today');
    }
  };

  const handleReset = () => {
    resetCycle();
    setTempEndDate('');
    setShowResetConfirm(false);
  };

  return (
    <PageLayout>
      <div style={{ marginBottom: 24 }}>
        <SubHeading size={32} style={{ marginBottom: 8 }}>
          Settings
        </SubHeading>
        <BodyText secondary>
          Manage your cycle tracking preferences.
        </BodyText>
      </div>

      <Card style={{ marginBottom: 20 }}>
        <SubHeading size={20} style={{ marginBottom: 4 }}>
          Your Cycle
        </SubHeading>
        <BodyText secondary size={14} style={{ marginBottom: 16 }}>
          Enter the first day of your last period.
        </BodyText>
        
        <DateInput
          label="First day of last period"
          value={tempEndDate}
          onChange={(e) => setTempEndDate(e.target.value)}
        />
        
        <div style={{ marginTop: 16 }}>
          <PrimaryButton 
            color={BRAND.burgundy} 
            onClick={handleSave}
            disabled={!tempEndDate}
            style={{ width: '100%' }}
          >
            Save Cycle Date
          </PrimaryButton>
        </div>

        {lastPeriodEndDate && (
          <div style={{ 
            marginTop: 16, 
            padding: '12px 16px', 
            backgroundColor: BRAND.cream,
            borderRadius: 8 
          }}>
            <BodyText size={13} secondary>
              Last period started: <strong>{formatDate(lastPeriodEndDate, 'MMMM d, yyyy')}</strong>
            </BodyText>
          </div>
        )}
      </Card>

      <Card style={{ marginBottom: 20 }}>
        <SubHeading size={20} style={{ marginBottom: 4 }}>
          Cycle Length
        </SubHeading>
        <BodyText secondary size={14} style={{ marginBottom: 12 }}>
          Default cycle length is {cycleLength} days.
        </BodyText>
        <BodyText size={13} secondary>
          Note: Custom cycle lengths coming soon.
        </BodyText>
      </Card>

      {lastPeriodEndDate && (
        <Card>
          <SubHeading size={20} style={{ marginBottom: 4, color: '#D32F2F' }}>
            Reset Data
          </SubHeading>
          <BodyText secondary size={14} style={{ marginBottom: 16 }}>
            This will clear all your cycle data and start fresh.
          </BodyText>
          
          {!showResetConfirm ? (
            <OutlineButton 
              color="#D32F2F" 
              onClick={() => setShowResetConfirm(true)}
              style={{ width: '100%' }}
            >
              Reset All Data
            </OutlineButton>
          ) : (
            <div>
              <div style={{ 
                padding: '12px 16px', 
                backgroundColor: '#FFEBEE',
                borderRadius: 8,
                marginBottom: 12 
              }}>
                <BodyText size={13} style={{ color: '#D32F2F' }}>
                  Are you sure? This action cannot be undone.
                </BodyText>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <OutlineButton 
                  color={BRAND.textSecondary}
                  onClick={() => setShowResetConfirm(false)}
                  style={{ flex: 1 }}
                >
                  Cancel
                </OutlineButton>
                <PrimaryButton 
                  color="#D32F2F"
                  onClick={handleReset}
                  style={{ flex: 1 }}
                >
                  Confirm Reset
                </PrimaryButton>
              </div>
            </div>
          )}
        </Card>
      )}

      <Divider />

      <Card>
        <SubHeading size={20} style={{ marginBottom: 8 }}>
          About DailyBasis
        </SubHeading>
        <BodyText secondary size={14} style={{ marginBottom: 16 }}>
          This app helps you track which DailyBasis supplement to take based on your menstrual cycle phase.
        </BodyText>
        <BodyText size={13} secondary style={{ marginBottom: 12 }}>
          Version 1.0.0
        </BodyText>
        <a 
          href="https://www.dailybasislife.com" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            color: BRAND.burgundy,
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          Visit DailyBasis Website →
        </a>
      </Card>
    </PageLayout>
  );
}
