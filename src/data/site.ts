// Shared site-wide data. Edit the values here and they update everywhere they are used.

export const siteUrl = 'https://santaclausniagara.com';

export const contact = {
	phoneDisplay: '(905) 327-9036',
	phoneHref: 'tel:+19053279036',
	email: 'byauch@cogeco.ca',
	emailHref: 'mailto:byauch@cogeco.ca',
};

// Single source of truth for rates. Edit once, use everywhere.
export const rates = {
	firstHour: 125,
	additionalHalfHour: 50,
};

// Municipalities the owner may include extra travel charges for (rates/travel rule, step 3d).
export const primaryAreas = ['St. Catharines', 'Niagara Falls', 'Niagara-on-the-Lake'];

export function money(amount: number) {
	return `$${amount.toFixed(2)}`;
}

export const ratesSentence = `Visits are ${money(rates.firstHour)} for the first hour, then ${money(
	rates.additionalHalfHour
)} per additional half hour.`;

export const primaryAreasSentence = `Travel is included in ${primaryAreas
	.slice(0, -1)
	.join(', ')}, and ${primaryAreas[primaryAreas.length - 1]}.`;

export const pricingExamples = [
	{ duration: '1 hour', price: rates.firstHour },
	{ duration: '1.5 hours', price: rates.firstHour + rates.additionalHalfHour },
	{ duration: '2 hours', price: rates.firstHour + 2 * rates.additionalHalfHour },
];

export const services = [
	{ id: 'home', title: 'Private Home Visits', anchor: '/services/#home' },
	{ id: 'party', title: 'Holiday Party Entertainment', anchor: '/services/#party' },
	{ id: 'community', title: 'Community & Charity Events', anchor: '/services/#community' },
	{ id: 'photo', title: 'Photo Sessions & Meet-and-Greets', anchor: '/services/#photo' },
	{ id: 'school', title: 'School & Daycare Visits', anchor: '/services/#school' },
	{ id: 'corporate', title: 'Corporate & Workplace Events', anchor: '/services/#corporate' },
];

// Lower-tier municipalities of the Niagara Region, in a friendly reading order.
export const municipalities = [
	'St. Catharines',
	'Niagara Falls',
	'Niagara-on-the-Lake',
	'Welland',
	'Fort Erie',
	'Port Colborne',
	'Thorold',
	'Grimsby',
	'Lincoln',
	'Pelham',
	'Wainfleet',
	'West Lincoln',
];

export interface Faq {
	q: string;
	a: string;
}

export function localBusinessSchema(areaServed: string[] = municipalities) {
	return {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Santa Claus Niagara',
		url: siteUrl,
		telephone: '(905) 327-9036',
		description:
			'A real-bearded professional Santa for hire in the Niagara region, available for private home visits, holiday parties, community and charity events, photo sessions, school and daycare visits, and corporate events.',
		areaServed: areaServed.map((name) => ({ '@type': 'City', name })),
	};
}

export function faqSchema(faqs: Faq[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((faq) => ({
			'@type': 'Question',
			name: faq.q,
			acceptedAnswer: { '@type': 'Answer', text: faq.a },
		})),
	};
}
