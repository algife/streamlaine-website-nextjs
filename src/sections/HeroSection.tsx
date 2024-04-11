import { useTranslations } from 'next-intl';
import type React from 'react';

import CallMeNowDialog from '@/components/dialogs/CallMeNowDialog';
import HardCutDivider from '@/components/ui/dividers/HardCutSideDivider';
import { WordHighlight } from '@/components/ui/HeroHighlight';
import { LampSection } from '@/components/ui/Lamp';
import ProofStatement from '@/components/ui/ProofStatement';
import { TypewriterEffectCarrousel } from '@/components/ui/TypewritterEffect';
import type { LightDirection } from '@/types/global';
import cn from '@/utils/cn';

const typewritenSentences = [
  'tedious repetitive tasks',
  'appointment booking',
  'customer support',
  'sales calls',
  'lead qualification',
  'direct messages',
  'email copywriting',
];

const subHeadingRowClasses =
  'flex flex-row justify-center text-center align-baseline font-sans';

export function HeroSection() {
  const t = useTranslations('Index');
  const lightDirection: LightDirection = 'down'; // Lamp Light Direction

  // -----

  const HeroOverline = <p>{t('hero__overline')}</p>;
  const HeroHeading = (
    <h1 className="flex flex-col text-5xl">{t('hero__heading')}</h1>
  );

  const HeroSubHeading = [
    <div key="subheading-line-1" className={subHeadingRowClasses}>
      {t('hero__subHeading_1')}
      <WordHighlight
        // animated
        // marker
        // underline
        key="hero-highlighted-words"
        text={t('hero__subHeading_2')}
        className="subHeading relative"
      />
      {t('hero__subHeading_3')}
    </div>,
    <div
      key="subheading-line-2"
      className={cn(
        subHeadingRowClasses,
        'flex align-baseline justify-center text-center text-3xl font-normal',
      )}
    >
      {t('hero__subHeading_4')}
      &nbsp;
      <TypewriterEffectCarrousel
        typewritenSentences={typewritenSentences!}
        className={cn(
          'bg-gradient-to-b from-sky-200 to-neutral-500 bg-clip-text align-baseline',
          subHeadingRowClasses,
        )}
      />
    </div>,
    <div
      key="subheading-line-3"
      className={cn('text-2xl', subHeadingRowClasses)}
    >
      <i>
        <WordHighlight
          // animated
          // marker
          // underline
          key="kesssy"
          text={t('hero__subHeading_5')}
          className="subHeading relative font-normal"
        />
      </i>
    </div>,
  ] as React.ReactNode[];

  const HeroProofStatement = (
    <ProofStatement
      text={t('hero__proof_statement__text')}
      subText={t('hero__proof_statement__subtext')}
      date={t('hero__proof_statement__date')}
    />
  );

  const HeroCta = (
    <div className="button-group mb-4 mt-5 flex flex-row justify-center space-x-6 md:space-x-4">
      <CallMeNowDialog />
    </div>
  );

  return (
    <div className="relative m-0 h-svh p-0">
      <LampSection
        {...{ lightDirection }}
        overline={HeroOverline}
        heading={HeroHeading}
        subHeading={HeroSubHeading}
        cta={HeroCta}
      >
        {HeroProofStatement}
      </LampSection>

      <HardCutDivider />
    </div>
  );
}
