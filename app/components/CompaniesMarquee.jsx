const companyLogos = [
  { name: 'Nudora', className: 'logo-nudora' },
  { name: 'PLUMI', className: 'logo-plumi' },
  { name: 'adsellr', className: 'logo-adsellr' },
  { name: 'OpenSea', className: 'logo-opensea' },
  { name: 'Caraway', className: 'logo-caraway' },
  { name: 'uproas', className: 'logo-uproas' },
  { name: 'SPOTMINDERS.', className: 'logo-spotminders' },
  { name: 'ICONIQ', className: 'logo-iconiq' },
];

export default function CompaniesMarquee() {
  const marqueeItems = [...companyLogos, ...companyLogos];

  return (
    <section className="companies-strip" aria-label="Trusted companies">
      <div className="companies-track">
        {marqueeItems.map((company, index) => (
          <div
            className={`company-logo ${company.className}`}
            key={`${company.name}-${index}`}
            aria-hidden={index >= companyLogos.length}
          >
            <span className="company-mark" aria-hidden="true" />
            <span>{company.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
