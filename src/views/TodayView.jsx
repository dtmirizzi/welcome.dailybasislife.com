import { useNavigate } from 'react-router-dom';
import { useCycle } from '../hooks/useCycle';
import { 
  PageLayout, 
  TodayHero, 
  Card, 
  SubHeading, 
  BodyText, 
  PrimaryButton,
  Divider,
  SupplementCard 
} from '../design/components';
import { BRAND } from '../design/tokens';

export function TodayView() {
  const navigate = useNavigate();
  const { 
    cycleDay, 
    phase, 
    supplement, 
    phaseName, 
    daysInPhase,
    needsNewCycle,
    lastPeriodEndDate 
  } = useCycle();

  const handleUpdateCycle = () => {
    navigate('/settings');
  };

  return (
    <PageLayout>
      <TodayHero cycleDay={cycleDay} phase={phase} />

      {needsNewCycle && (
        <>
          <Divider />
          <Card style={{ backgroundColor: '#FFF4E6', borderColor: '#FFB84D' }}>
            <SubHeading size={20} style={{ marginBottom: 8 }}>
              Time to Update Your Cycle
            </SubHeading>
            <BodyText secondary size={14} style={{ marginBottom: 16 }}>
              It's been over 28 days. Please update your period start date to continue tracking.
            </BodyText>
            <PrimaryButton 
              color="#FFB84D" 
              onClick={handleUpdateCycle}
              style={{ width: '100%' }}
            >
              Update Now
            </PrimaryButton>
          </Card>
        </>
      )}

      {lastPeriodEndDate && phase && (
        <>
          <Divider />
          
          <Card style={{ marginBottom: 20 }}>
            <SubHeading size={20} style={{ marginBottom: 8 }}>
              Today's Supplement
            </SubHeading>
            <BodyText secondary size={14} style={{ marginBottom: 16 }}>
              You're currently in the {phaseName}. Take {supplement} today.
            </BodyText>
            
            {daysInPhase > 0 && (
              <div style={{
                backgroundColor: phase === 1 ? BRAND.burgundyLight : BRAND.goldLight,
                padding: '12px 16px',
                borderRadius: 8,
                textAlign: 'center',
              }}>
                <BodyText 
                  size={14} 
                  style={{ 
                    color: phase === 1 ? BRAND.burgundy : BRAND.gold,
                    fontWeight: 500 
                  }}
                >
                  {daysInPhase} day{daysInPhase !== 1 ? 's' : ''} remaining in this phase
                </BodyText>
              </div>
            )}
          </Card>

          <SubHeading size={24} style={{ marginBottom: 16 }}>
            Your Supplements
          </SubHeading>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24 }}>
            <SupplementCard phase={1} />
            <SupplementCard phase={2} />
          </div>

          <Card style={{ textAlign: 'center' }}>
            <SubHeading size={22} style={{ marginBottom: 8 }}>
              Need to restock or update you next shipment?
            </SubHeading>
            <BodyText secondary size={14} style={{ marginBottom: 16 }}>
            Go to your account or email us at{' '}
            <a 
              href="mailto:hello@dailybasis.com" 
              style={{ color: BRAND.burgundy, textDecoration: 'underline' }}
            >
              hello@dailybasis.com
            </a>
            .
            </BodyText>
            <PrimaryButton 
              color={BRAND.burgundy}
              onClick={() => window.open('https://account.dailybasislife.com/authentication/login?client_id=9ff42c4c-cb81-402c-ad82-ee4d4f952d05&locale=en&redirect_uri=%2Fauthentication%2Foauth%2Fauthorize%3Fclient_id%3D9ff42c4c-cb81-402c-ad82-ee4d4f952d05%26locale%3Den%26nonce%3De9d9be2c-5801-4141-93ee-aeb6827ec3ca%26redirect_uri%3Dhttps%253A%252F%252Faccount.dailybasislife.com%252Fcallback%26region_country%3DUS%26response_type%3Dcode%26scope%3Dopenid%2Bemail%2Bcustomer-account-api%253Afull%26state%3DhWN9mBYS4nrcjXhmRBRSa3lK&region_country=US', '_blank')}
              style={{ width: '100%' }}
            >
              Shop Now
            </PrimaryButton>
          </Card>
        </>
      )}

      {!lastPeriodEndDate && (
        <>
          <Divider />
          <Card>
            <SubHeading size={20} style={{ marginBottom: 8 }}>
              Get Started
            </SubHeading>
            <BodyText secondary size={14} style={{ marginBottom: 16 }}>
              Enter your cycle start date to see which supplement to take today.
            </BodyText>
            <PrimaryButton 
              color={BRAND.burgundy} 
              onClick={handleUpdateCycle}
              style={{ width: '100%' }}
            >
              Set Up Your Cycle
            </PrimaryButton>
          </Card>
        </>
      )}
    </PageLayout>
  );
}
