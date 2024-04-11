import { HeroSection } from '@/sections/HeroSection';

export default function IndexPage() {
  // const t = useTranslations('Index');

  return (
    <div className="index-page">
      <HeroSection />
      {/* <FloatingBox>VSL Goes here</FloatingBox> */}
      {/* <SuccessCaseItem
        role={t('success-cases__klarna__role')}
        name={t('success-cases__klarna__name')}
        quote={t('success-cases__klarna__title')}
        bulletpoints={[
          { text: t(`success-cases__klarna__highlight_1`), icon: <>ICON</> },
          { text: t(`success-cases__klarna__highlight_2`), icon: <>ICON</> },
          { text: t(`success-cases__klarna__highlight_3`), icon: <>ICON</> },
          { text: t(`success-cases__klarna__highlight_4`), icon: <>ICON</> },
        ]}
      /> */}
    </div>
  );
}
