import { getDomainColor } from '@/constants/domain-colors';
import { cn, getBrightness } from '@/lib/utils';
import {
  ArcaneDomainIcon,
  BladeDomainIcon,
  BoneDomainIcon,
  CodexDomainIcon,
  GraceDomainIcon,
  MidnightDomainIcon,
  SageDomainIcon,
  SplendorDomainIcon,
  ValorDomainIcon,
} from '@/components/icons';

type CardBannerProps = {
  domainPrimary?: string;
  domainSecondary?: string;
  level?: number;
};

const getDomainIcon = (domain?: string) => {
  switch (domain) {
    case 'arcane':
      return ArcaneDomainIcon;
    case 'blade':
      return BladeDomainIcon;
    case 'bone':
      return BoneDomainIcon;
    case 'codex':
      return CodexDomainIcon;
    case 'grace':
      return GraceDomainIcon;
    case 'midnight':
      return MidnightDomainIcon;
    case 'sage':
      return SageDomainIcon;
    case 'splendor':
      return SplendorDomainIcon;
    case 'valor':
      return ValorDomainIcon;
    default:
      return ArcaneDomainIcon;
  }
};

export const CardBanner: React.FC<CardBannerProps> = ({
  domainPrimary = 'arcana',
  domainSecondary,
  level,
}) => {
  const position = 'absolute left-[26px] -top-1';
  const size = 'h-[120px] w-[59px]';
  const PrimaryIcon = getDomainIcon(domainPrimary);
  const SecondaryIcon = getDomainIcon(domainSecondary);
  const domainPrimaryColor = getDomainColor(domainPrimary);
  const domainSecondaryColor = getDomainColor(domainSecondary);
  const highBrightness = getBrightness(domainPrimaryColor) < 128;
  return (
    <>
      <div className='absolute -top-1 left-[24px] z-40'>
        <img className='h-[120px] w-[63px]' src='/assets/card/banner.webp' />
      </div>
      <div
        className={cn(
          'absolute  z-50 -translate-x-1/2 transform',
          domainSecondary ? 'left-[56px] top-[16px]' : 'left-[56px] top-[54px]',
        )}
      >
        <PrimaryIcon
          className={cn(
            'h-[32px] w-[32px]',
            highBrightness ? 'fill-white' : 'fill-black',
          )}
        />
      </div>
      {domainSecondary ? (
        <div className='absolute left-[56px] top-[54px] z-50 -translate-x-1/2 transform'>
          <SecondaryIcon
            className={cn(
              'h-[32px] w-[32px]',
              highBrightness ? 'fill-white' : 'fill-black',
            )}
          />
        </div>
      ) : null}
      {level ? (
        <p className='text-eveleth-clean absolute left-[56px] top-[28px] z-50 -translate-x-1/2 transform text-card-title-lg font-bold'>
          <span className={cn(highBrightness ? 'text-white' : 'text-black')}>
            {level}
          </span>
        </p>
      ) : null}
      <div
        className={cn(position, size, 'clip-banner-fg z-30')}
        style={{ background: domainPrimaryColor }}
      />
      <div
        className={cn(position, size, 'clip-banner-bg z-20')}
        style={{
          background: domainSecondary
            ? domainSecondaryColor
            : domainPrimaryColor,
        }}
      />
    </>
  );
};
