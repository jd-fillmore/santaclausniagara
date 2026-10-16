export interface CityFaq {
	q: string;
	a: string;
}

export interface City {
	name: string;
	slug: string;
	h1: string;
	metaTitle: string;
	metaDescription: string;
	region: string;
	travelIncluded: boolean;
	photo: string;
	glance: string[];
	heroIntro: string;
	intro1: string;
	intro2: string;
	// Six blurbs, in the canonical order: home, party, community, photo, school, corporate.
	services: string[];
	pricingNote: string;
	booking: string[];
	nearby: string;
	faqs: CityFaq[];
}

export const cities: City[] = [
	{
		name: 'St. Catharines',
		slug: 'st-catharines',
		h1: 'Hire a Santa in St. Catharines',
		metaTitle: 'Hire Santa Claus in St. Catharines | Real-Bearded Santa Rental',
		metaDescription:
			'Book a real-bearded Santa Claus in St. Catharines for home visits, parties, photo sessions and school or corporate events. Call (905) 327-9036 to check your date.',
		region: 'the largest city in the region',
		travelIncluded: true,
		photo: 'santa-61.jpg',
		glance: [
			'Homes from downtown to Port Dalhousie',
			'Family gatherings that fill the house',
			'Schools, daycares, and young groups',
			'Travel included in the city',
		],
		heroIntro:
			'If you are looking to hire a Santa in St. Catharines, Santa Claus Niagara is the real-bearded professional families across the city call on for home visits, holiday parties, school appearances, and workplace celebrations. Travel here is included.',
		intro1:
			'St. Catharines reaches from the busy heart of downtown out to the quiet streets of Port Dalhousie and the neighbourhoods that line the Welland Canal. In all of those corners, a visit from a real-bearded Santa feels less like a booking and more like Christmas arriving at your door.',
		intro2:
			'Families in the city tend to gather big, with grandparents, cousins, neighbours, and friends packed into one warm room. Santa is at home in that kind of full house, moving easily from a quiet word with the youngest child to a photo with everyone crowded in together.',
		services: [
			'Whether you live near the canal or out toward Port Dalhousie, Santa can arrive with gifts, photos, and plenty of time for the moment your family has been waiting for.',
			'Neighbourhood get-togethers, family reunions, and holiday house parties across St. Catharines all get the same festive lift when Santa joins the room.',
			'Downtown celebrations, charity drives, and fundraisers count on Santa to draw a crowd and keep the goodwill moving through the day.',
			'Photographers and seasonal studios in the city can rely on a patient, photogenic Santa for portrait sessions and warm meet-and-greets.',
			'Elementary schools, preschools, and daycares here enjoy a gentle storytime visit shaped to the age of the room.',
			'For a staff party or office celebration, Santa gives your St. Catharines team a holiday moment that feels genuinely special.',
		],
		pricingNote:
			'St. Catharines is one of the primary areas, so travel is included in your visit, with no extra mileage added on.',
		booking: [
			'Call (905) 327-9036 or email byauch@cogeco.ca with the date you have in mind.',
			'Share your St. Catharines address, the type of event, and how long you would like Santa to stay.',
			'Santa checks his calendar and confirms the details with you directly.',
		],
		nearby:
			'St. Catharines sits at the centre of the region, so Santa is also close to Thorold, Niagara-on-the-Lake, and Lincoln. If you are just outside the city, he may be able to fit your celebration into the same trip.',
		faqs: [
			{
				q: 'How do I book Santa for a home visit in St. Catharines?',
				a: 'Call (905) 327-9036 or use the contact page and share your date, address, and a little about your gathering. Santa replies personally to confirm.',
			},
			{
				q: 'How much does a Santa visit cost in St. Catharines, and is travel extra?',
				a: 'A visit begins at $125.00 for the first hour, then $50.00 for each additional half hour, and travel in St. Catharines is included.',
			},
			{
				q: 'Does Santa have a real beard?',
				a: 'Yes. Santa Claus Niagara is a real-bearded Santa, and that natural beard is part of what makes the visit feel convincing to children.',
			},
			{
				q: 'What kinds of events does Santa attend in St. Catharines?',
				a: 'Santa takes on home visits, holiday parties, community and charity events, photo sessions, school and daycare visits, and corporate gatherings.',
			},
			{
				q: 'How far ahead should I book?',
				a: 'The season fills quickly, so it is worth asking early. Availability for your St. Catharines date is best checked by phone or email.',
			},
		],
	},
	{
		name: 'Niagara Falls',
		slug: 'niagara-falls',
		h1: 'Hire a Santa in Niagara Falls',
		metaTitle: 'Hire Santa Claus in Niagara Falls | Real-Bearded Santa Rental',
		metaDescription:
			'Looking for a Santa Claus for hire in Niagara Falls? A real-bearded Santa for home visits, party entertainment, photo sessions and corporate events. Call (905) 327-9036.',
		region: 'the city of the Falls',
		travelIncluded: true,
		photo: 'santa-62.jpg',
		glance: [
			'Front-door visits across the city',
			'Parties for families and friends',
			'Studios and seasonal promotions',
			'Travel included in the city',
		],
		heroIntro:
			'For a Santa Claus for hire in Niagara Falls, Santa Claus Niagara brings a real beard and a warm, professional presence to homes, parties, and events throughout the city. Travel is included.',
		intro1:
			'Niagara Falls is a city of two moods. There is the bright, busy tourist core along the parkway, and there are the family streets and older neighbourhoods where people actually live, raise children, and host Christmas. Santa knows both, and he is equally happy at a quiet front door or a packed hall.',
		intro2:
			'With so many families calling the city home, December here is full of gatherings. Santa slips easily into the rhythm of a Falls household, giving the children his full attention and giving the grown-ups a genuine moment of magic to enjoy alongside them.',
		services: [
			'A private Santa visit brings the holiday to your door in any Niagara Falls neighbourhood, with gifts, photos, and unhurried time for each child.',
			'From a lively house party to a large family gathering, Santa keeps the room laughing and the photos coming all evening.',
			'Parades, charity drives, and community fundraisers across the city rely on that unmistakable red suit to bring people together.',
			'Malls, studios, and seasonal promotions can book a polished, photogenic Santa for portraits and meet-and-greets.',
			'Preschools, elementary schools, and daycares in Niagara Falls welcome Santa for storytime and gentle one-on-one moments.',
			'Office parties and staff events get real holiday warmth when Santa visits your Niagara Falls workplace.',
		],
		pricingNote:
			'Niagara Falls is a primary area, so your visit includes travel at no extra charge.',
		booking: [
			'Reach out by phone at (905) 327-9036 or by email at byauch@cogeco.ca.',
			'Tell Santa your Niagara Falls address, the occasion, and the times that suit your family or team.',
			'He confirms availability and the final details with you before the date is locked in.',
		],
		nearby:
			'Niagara Falls borders Niagara-on-the-Lake, Thorold, and Fort Erie, and it is only a short drive from St. Catharines. Santa is glad to serve families in any of these neighbouring communities.',
		faqs: [
			{
				q: 'How can I book a Santa for a party in Niagara Falls?',
				a: 'Send your party date and location through the contact page, or call (905) 327-9036. Santa will confirm whether he is free for your celebration.',
			},
			{
				q: 'What does it cost to hire Santa in Niagara Falls?',
				a: 'The first hour is $125.00, and each additional half hour is $50.00, with travel within Niagara Falls included.',
			},
			{
				q: 'Is the beard really his own?',
				a: 'It is. Santa Claus Niagara wears a full, natural beard, so the look holds up close up and in every photograph.',
			},
			{
				q: 'Can Santa come to a corporate event in Niagara Falls?',
				a: 'He comes for private home visits, parties, schools, photo engagements, community events, and corporate occasions.',
			},
			{
				q: 'When should I get in touch about my date?',
				a: 'Earlier is always safer in December. The quickest way to confirm a Niagara Falls booking is a phone call or an email.',
			},
		],
	},
	{
		name: 'Niagara-on-the-Lake',
		slug: 'niagara-on-the-lake',
		h1: 'Hire Santa Claus in Niagara-on-the-Lake',
		metaTitle:
			'Hire Santa Claus in Niagara-on-the-Lake | Real-Bearded Santa Rental',
		metaDescription:
			'Book a real-bearded Santa Claus in Niagara-on-the-Lake for home visits, holiday parties, photo sessions and community events. Call (905) 327-9036 to check availability.',
		region: 'the historic town on the river',
		travelIncluded: true,
		photo: 'santa-63.jpg',
		glance: [
			'Heritage homes and countryside gatherings',
			'Intimate parties and reunions',
			'Photo sessions and seasonal events',
			'Travel included in the town',
		],
		heroIntro:
			'Hire Santa Claus in Niagara-on-the-Lake and welcome a real-bearded professional who brings classic Christmas charm to homes, parties, and community events. Travel in town is included.',
		intro1:
			'Niagara-on-the-Lake feels made for December. Heritage homes, tree-lined streets, and the pretty shopfronts of Old Town give every holiday gathering a storybook backdrop, and a visit from a real-bearded Santa fits that setting perfectly.',
		intro2:
			'Families in town and the surrounding countryside often celebrate at home, and Santa is happy to be part of those intimate evenings. He takes his time, speaks with the children, and lets the moment breathe rather than rushing from photo to photo.',
		services: [
			'A private home visit in Niagara-on-the-Lake brings Santa straight to your doorstep, gifts in hand and time to spare.',
			'Whether your party is in a heritage living room or a garden room, Santa mingles warmly with guests of every age.',
			'Community and charity events in town, from seasonal celebrations to fundraisers, are a natural fit for Santa.',
			'Seasonal promotions and photo sessions can book a photogenic Santa who poses beautifully for every portrait.',
			'Young students at local schools and daycares adore Santa storytime and the quiet magic of a one-on-one chat.',
			'Corporate gatherings at a Niagara-on-the-Lake workplace or venue get a polished, professional Santa for the occasion.',
		],
		pricingNote:
			'Niagara-on-the-Lake is one of the primary areas, so travel is included with your visit.',
		booking: [
			'Start with a call to (905) 327-9036 or a note to byauch@cogeco.ca.',
			'Let Santa know your date, your Niagara-on-the-Lake location, and the kind of celebration you are planning.',
			'He replies to confirm availability and talk through the details of the visit.',
		],
		nearby:
			'Niagara-on-the-Lake sits close to St. Catharines and Niagara Falls, with Thorold a little further along the canal. Santa is delighted to visit families in all of these nearby areas.',
		faqs: [
			{
				q: 'How do I arrange a home visit in Niagara-on-the-Lake?',
				a: 'Call (905) 327-9036 or email byauch@cogeco.ca with your preferred date and address. Santa will confirm whether he can be there.',
			},
			{
				q: 'What is the cost of a visit here, and does travel add anything?',
				a: 'Santa charges $125.00 for the first hour and $50.00 per additional half hour, and travel in Niagara-on-the-Lake is included.',
			},
			{
				q: 'Will children believe he is the real Santa?',
				a: 'His full natural beard helps a great deal. Because it is real, close-up moments hold up and the illusion stays intact.',
			},
			{
				q: 'What events does Santa take on in town?',
				a: 'Expect home visits, holiday parties, charity and community events, photo sessions, school and daycare visits, and corporate bookings.',
			},
			{
				q: 'How early should I reach out?',
				a: 'Dates go quickly during the holidays. Contact Santa by phone or email to check availability for your Niagara-on-the-Lake celebration.',
			},
		],
	},
	{
		name: 'Welland',
		slug: 'welland',
		h1: 'Hire a Santa in Welland',
		metaTitle: 'Hire Santa Claus in Welland | Real-Bearded Santa Rental',
		metaDescription:
			'Hire a real-bearded Santa Claus in Welland for home visits, holiday parties, school visits and corporate events. Call (905) 327-9036 to book your date.',
		region: 'the Rose City on the canal',
		travelIncluded: false,
		photo: 'santa-64.jpg',
		glance: [
			'Doorstep visits around the Rose City',
			'Warm, full-house family parties',
			'Canal-side community events',
			'Travel charge quoted in advance',
		],
		heroIntro:
			'Families who hire a Santa in Welland get a real-bearded professional who brings warmth and energy to home visits, holiday parties, and community events across the Rose City.',
		intro1:
			'Welland grew up around the canal, and that history still shapes the city, from the downtown core to the green corridor along the recreational waterway. At Christmas those neighbourhoods fill with lights, and a real-bearded Santa fits right into the picture.',
		intro2:
			'People here know one another, and gatherings tend to spill from the kitchen into the living room. Santa is comfortable in that relaxed, familiar setting, greeting each child by name and letting the adults enjoy the fun as much as the little ones.',
		services: [
			'A home visit in Welland means Santa at your front door with gifts, photos, and time carved out for every child.',
			'Holiday parties and family get-togethers across the city come to life when Santa works the room with stories and good cheer.',
			'Charity drives, community celebrations, and fundraisers in Welland value a Santa who welcomes everyone with a smile.',
			'Retail promotions and photo sessions can count on a Santa who stays patient and photogenic through a busy schedule.',
			'Daycares, preschools, and elementary schools in Welland enjoy a calm, friendly Santa visit built around the children.',
			'Give your Welland workplace team a holiday moment with a professional Santa at your staff event or office party.',
		],
		pricingNote:
			'Welland is outside the three primary areas, so events here may include extra travel charges. Santa always quotes the exact total before your visit, so there are no surprises.',
		booking: [
			'Ring Santa at (905) 327-9036, or write to byauch@cogeco.ca.',
			'Provide your Welland address, the date, and the type of event you have planned.',
			'Santa confirms availability, the timing, and any travel detail with you directly.',
		],
		nearby:
			'Welland is close to Thorold, Port Colborne, and Pelham, and not far from St. Catharines. If you are just outside the city, Santa may still be able to include you on the same trip.',
		faqs: [
			{
				q: 'How do I book Santa for a home visit in Welland?',
				a: 'Reach Santa at (905) 327-9036 or byauch@cogeco.ca with your date and address. He answers personally and confirms the details.',
			},
			{
				q: 'What does a visit cost in Welland, and is there a travel fee?',
				a: 'Rates are $125.00 for the first hour, then $50.00 per additional half hour. Welland sits outside the primary areas, so extra travel charges may apply, and Santa will quote the exact total.',
			},
			{
				q: 'Does Santa wear a real beard?',
				a: 'He does. Santa Claus Niagara has a genuine, full beard, grown and cared for, rather than a costume piece.',
			},
			{
				q: 'What kinds of events does Santa do in Welland?',
				a: 'Santa fills his calendar with home visits, parties, community and charity events, photo shoots, school and daycare appearances, and corporate engagements.',
			},
			{
				q: 'How far in advance should I book?',
				a: 'December dates fill up quickly, so it pays to ask early. Availability is best confirmed by a phone call or an email.',
			},
		],
	},
	{
		name: 'Fort Erie',
		slug: 'fort-erie',
		h1: 'Hire a Santa in Fort Erie',
		metaTitle: 'Hire Santa Claus in Fort Erie | Real-Bearded Santa Rental',
		metaDescription:
			'Rent a Santa Claus in Fort Erie for home visits, parties, photo sessions and community events. A real-bearded professional Santa. Call (905) 327-9036.',
		region: 'the border town on Lake Erie',
		travelIncluded: false,
		photo: 'santa-65.jpg',
		glance: [
			'Homes from Crystal Beach to Ridgeway',
			'Relaxed lakeshore gatherings',
			'Town events and fundraisers',
			'Travel charge quoted in advance',
		],
		heroIntro:
			'Rent a Santa Claus in Fort Erie and welcome a real-bearded Santa to your home, party, or community event. From Crystal Beach to Ridgeway, he brings the holiday spirit to town.',
		intro1:
			'Fort Erie stretches along the Lake Erie shore, from the Peace Bridge and the old fort to the beach communities of Crystal Beach and Ridgeway. That lakeshore character gives the holidays here a breezy, small-town feel, and Santa loves being part of it.',
		intro2:
			'Many families in Fort Erie gather at home, with room for cousins, grandparents, and neighbours. Santa settles into that easy atmosphere, telling a story, checking in with the children, and posing for the group photo everyone wants.',
		services: [
			'From Crystal Beach to the north end, a private Santa visit brings gifts, photos, and warmth straight to your Fort Erie door.',
			'Beach-house parties, family reunions, and holiday get-togethers along the shore all get a jolt of festive fun from Santa.',
			'Town celebrations, charity drives, and fundraisers in Fort Erie rely on Santa to bring neighbours out and keep spirits high.',
			'Photo sessions and seasonal retail events can book a patient, photogenic Santa for memorable portraits.',
			'Local schools, preschools, and daycares in Fort Erie welcome Santa for gentle storytime and individual moments.',
			'Office parties and staff events in town get real Christmas charm from a professional Santa.',
		],
		pricingNote:
			'Fort Erie lies outside the primary areas, so a visit may include extra travel charges. Santa confirms the exact total with you beforehand.',
		booking: [
			'Call (905) 327-9036 or send a note to byauch@cogeco.ca.',
			'Share your Fort Erie address, the date, and what kind of event you are hosting.',
			'Santa gets back to you to confirm the booking and the final details.',
		],
		nearby:
			'Fort Erie neighbours Port Colborne and Wainfleet along the lakeshore, and Niagara Falls is a short drive away. Santa is happy to serve families in these nearby communities too.',
		faqs: [
			{
				q: 'How can I book Santa for a home visit in Fort Erie?',
				a: 'Tell Santa your Fort Erie date and address by phone at (905) 327-9036 or email at byauch@cogeco.ca, and he will confirm your visit himself.',
			},
			{
				q: 'What is the cost of a Santa visit in Fort Erie?',
				a: 'Expect $125.00 for the first hour and $50.00 for each additional half hour. As Fort Erie is outside the primary areas, extra travel charges may apply, quoted in advance.',
			},
			{
				q: 'Is Santa real-bearded?',
				a: 'Yes. His beard is genuine and full, which is exactly why he looks convincing in person and in photos.',
			},
			{
				q: 'What events does Santa attend around Fort Erie?',
				a: 'His bookings range from home visits and parties to community and charity events, photo sessions, schools, daycares, and corporate events.',
			},
			{
				q: 'How far ahead should I plan?',
				a: 'It is wise to ask early, since the season books up. The fastest way to check a Fort Erie date is by phone or email.',
			},
		],
	},
	{
		name: 'Port Colborne',
		slug: 'port-colborne',
		h1: 'Hire a Santa in Port Colborne',
		metaTitle: 'Hire Santa Claus in Port Colborne | Real-Bearded Santa Rental',
		metaDescription:
			'Book a real-bearded Santa Claus in Port Colborne for home visits, holiday parties, school visits and community events. Call (905) 327-9036.',
		region: 'the lakeside port at the canal mouth',
		travelIncluded: false,
		photo: 'santa-66.jpg',
		glance: [
			'Homes near the canal and harbour',
			'Family parties by the lake',
			'Community and charity events',
			'Travel charge quoted in advance',
		],
		heroIntro:
			'To hire a Santa in Port Colborne, look no further than a real-bearded professional who brings Christmas cheer to homes, parties, and community gatherings along the lakeshore.',
		intro1:
			'Port Colborne sits where the canal meets Lake Erie, a working port town with a friendly, down-to-earth feel. Between the waterfront and the quiet residential streets, there is a strong sense of community that comes alive at Christmas.',
		intro2:
			'Families here tend to keep traditions close, and a visit from a real-bearded Santa fits neatly into those routines. He is patient with the youngest children and happy to share a laugh with the adults who still love the season.',
		services: [
			'A home visit in Port Colborne brings Santa to your door with gifts, photos, and time for each child to have their moment.',
			'Holiday parties and family gatherings around town get a warm centrepiece when Santa joins in.',
			'Community events, charity drives, and fundraisers in Port Colborne are a natural place to find Santa mingling with the crowd.',
			'Studios and seasonal promotions can book a photogenic Santa who stays calm and poses beautifully.',
			'Elementary schools, preschools, and daycares in town enjoy Santa storytime shaped to their students.',
			'Staff events and office parties in Port Colborne get an easy, professional Santa for the occasion.',
		],
		pricingNote:
			'Because Port Colborne is outside the primary areas, a booking may include extra travel charges. Santa will always quote the exact amount before you commit.',
		booking: [
			'Get in touch at (905) 327-9036 or byauch@cogeco.ca.',
			'Tell Santa your Port Colborne address, the date, and the type of celebration.',
			'He confirms availability and the fine details by return call or email.',
		],
		nearby:
			'Port Colborne is close to Welland and Wainfleet, and a short drive from Fort Erie. Santa is pleased to visit families in any of these nearby communities.',
		faqs: [
			{
				q: 'How do I book Santa for a home visit in Port Colborne?',
				a: 'Call (905) 327-9036 or email byauch@cogeco.ca with your date and address, and Santa will confirm the visit personally.',
			},
			{
				q: 'How much does a Santa visit cost in Port Colborne?',
				a: 'A visit costs $125.00 for the first hour, then $50.00 for each additional half hour. Port Colborne is outside the primary areas, so extra travel charges may apply, and Santa quotes the exact total beforehand.',
			},
			{
				q: 'Is the beard his own?',
				a: 'It is a real, full beard, which is part of what makes Santa Claus Niagara so believable to children.',
			},
			{
				q: 'What kinds of events does Santa take on here?',
				a: 'Santa is available for home visits, parties, community and charity events, photo sessions, schools, daycares, and corporate functions.',
			},
			{
				q: 'When is the best time to enquire?',
				a: 'The sooner the better, as December fills quickly. Availability for your Port Colborne date is checked by phone or email.',
			},
		],
	},
	{
		name: 'Thorold',
		slug: 'thorold',
		h1: 'Hire a Santa in Thorold',
		metaTitle: 'Hire Santa Claus in Thorold | Real-Bearded Santa Rental',
		metaDescription:
			'Book a real-bearded Santa Claus in Thorold for home visits, holiday parties, school and corporate events. Professional Santa for hire. Call (905) 327-9036.',
		region: 'the canal city on the escarpment',
		travelIncluded: false,
		photo: 'santa-67.jpg',
		glance: [
			'Visits across the canal city',
			'Parties for neighbours and family',
			'Schools and local groups',
			'Travel charge quoted in advance',
		],
		heroIntro:
			'When you hire a Santa in Thorold, you get a real-bearded professional who brings warmth and polish to home visits, parties, and events across the canal city.',
		intro1:
			'Thorold is a compact city that grew up around the Welland Canal, where the locks lift ships up the escarpment. It has the feel of a small town with the convenience of a city, and its neighbourhoods are the kind where a front-door Santa visit lands beautifully.',
		intro2:
			'Families in Thorold often celebrate close to home, and Santa is glad to be part of those evenings. He gives the children his attention, keeps the adults smiling, and leaves everyone with a memory worth keeping.',
		services: [
			'Santa arrives at your Thorold home with gifts, photos, and an unhurried visit tailored to your family.',
			'Local holiday parties and family get-togethers get a lively boost when Santa joins the celebration.',
			'Community and charity events in Thorold welcome a Santa who brings people together with good cheer.',
			'Photo sessions and seasonal retail events can book a Santa who stays patient and camera-ready.',
			'Schools, preschools, and daycares in Thorold enjoy a friendly Santa visit built around the children.',
			'Corporate and workplace events get a professional Santa who fits right into your staff celebration.',
		],
		pricingNote:
			'Thorold is just outside the primary areas, so a visit may include extra travel charges. Santa always confirms the exact total with you in advance.',
		booking: [
			'Call (905) 327-9036 or email byauch@cogeco.ca to start the conversation.',
			'Give Santa your Thorold address, your date, and a few details about the event.',
			'He confirms availability and the arrangements directly with you.',
		],
		nearby:
			'Thorold is bordered by St. Catharines and Welland, with Niagara Falls close by and Pelham just to the south. Santa is happy to serve families across these neighbouring areas.',
		faqs: [
			{
				q: 'How do I arrange a home visit in Thorold?',
				a: 'Reach out at (905) 327-9036 or byauch@cogeco.ca with the date and your Thorold address, and Santa responds personally.',
			},
			{
				q: 'What does a visit cost in Thorold?',
				a: 'The cost is $125.00 for the first hour and $50.00 per additional half hour. Thorold is outside the primary areas, so extra travel charges may apply, quoted in advance.',
			},
			{
				q: 'Is Santa\u2019s beard genuine?',
				a: 'Yes, he has a genuine full beard. It is one of the details that makes the visit feel truly real.',
			},
			{
				q: 'What events does Santa attend in Thorold?',
				a: 'He attends home visits, holiday parties, community and charity events, photo sessions, school and daycare visits, and workplace events.',
			},
			{
				q: 'How early should I get in touch?',
				a: 'Early is best during the holiday rush. Check your Thorold date by phone or email before it is gone.',
			},
		],
	},
	{
		name: 'Grimsby',
		slug: 'grimsby',
		h1: 'Hire Santa Claus in Grimsby',
		metaTitle: 'Hire Santa Claus in Grimsby | Real-Bearded Santa Rental',
		metaDescription:
			'Hire a real-bearded Santa Claus in Grimsby for home visits, holiday parties, photo sessions and corporate events. Professional Santa for hire. Call (905) 327-9036.',
		region: 'the lakeside town under the escarpment',
		travelIncluded: false,
		photo: 'santa-68.jpg',
		glance: [
			'Doorstep visits under the escarpment',
			'Lakeside family celebrations',
			'Community and school events',
			'Travel charge quoted in advance',
		],
		heroIntro:
			'Hire Santa Claus in Grimsby and bring a real-bearded professional to your home, party, or workplace. He serves families across town with warmth and a genuine holiday spirit.',
		intro1:
			'Grimsby sits on the shore of Lake Ontario, tucked between the water and the brow of the Niagara Escarpment. Its location between Hamilton and St. Catharines gives it a relaxed, residential feel, and the holidays here are spent close to family and neighbours.',
		intro2:
			'Whether your celebration is a quiet evening at home or a busy community gathering, Santa adapts to the room. He speaks easily with children, keeps the tone warm, and makes sure every family gets the photo they came for.',
		services: [
			'A private visit brings Santa to your Grimsby doorstep with gifts, photos, and time for each child.',
			'Home parties and holiday get-togethers across town get extra sparkle when Santa stops by.',
			'Community celebrations, charity drives, and fundraisers in Grimsby are a great fit for Santa.',
			'Photo sessions and retail events can book a Santa who is patient, friendly, and photogenic.',
			'Schools, preschools, and daycares in Grimsby enjoy a gentle Santa storytime with the children.',
			'Corporate and staff events in town get a polished, professional Santa for the celebration.',
		],
		pricingNote:
			'Grimsby is outside the primary areas, so events here may include extra travel charges. Santa quotes the exact total before booking.',
		booking: [
			'Begin by calling (905) 327-9036 or emailing byauch@cogeco.ca.',
			'Share your Grimsby address, the date, and the nature of your event.',
			'Santa confirms the details with you once he checks his calendar.',
		],
		nearby:
			'Grimsby is close to Lincoln and West Lincoln, and a straightforward drive from St. Catharines. Santa is glad to serve families in these nearby communities as well.',
		faqs: [
			{
				q: 'How do I book Santa for a home visit in Grimsby?',
				a: 'Call (905) 327-9036 or email byauch@cogeco.ca with your date and address, and Santa will get back to you personally.',
			},
			{
				q: 'What does a visit cost in Grimsby, and is travel included?',
				a: 'You can expect $125.00 for the first hour and $50.00 for each additional half hour. Grimsby lies outside the primary areas, so extra travel charges may apply, with the exact total quoted in advance.',
			},
			{
				q: 'Is Santa a real-bearded Santa?',
				a: 'He is. His full natural beard helps children believe and keeps every photograph looking authentic.',
			},
			{
				q: 'What kinds of events does Santa attend in Grimsby?',
				a: 'Santa covers home visits, parties, community and charity events, photo sittings, school and daycare visits, and corporate celebrations.',
			},
			{
				q: 'How soon should I reserve a date?',
				a: 'The holiday calendar fills up, so it is best to ask early. Santa checks Grimsby availability by phone or email.',
			},
		],
	},
	{
		name: 'Lincoln',
		slug: 'lincoln',
		h1: 'Hire a Santa in Lincoln',
		metaTitle: 'Hire Santa Claus in Lincoln | Real-Bearded Santa Rental',
		metaDescription:
			'Hire a real-bearded Santa Claus in Lincoln, Ontario, including Beamsville, Vineland and Jordan, for home visits, parties and community events. Call (905) 327-9036.',
		region: 'wine country on the escarpment bench',
		travelIncluded: false,
		photo: 'santa-69.jpg',
		glance: [
			'Homes in Beamsville, Vineland, and Jordan',
			'Country gatherings and reunions',
			'Orchard-country community events',
			'Travel charge quoted in advance',
		],
		heroIntro:
			'To hire a Santa in Lincoln, Ontario, families in Beamsville, Vineland, and Jordan turn to a real-bearded Santa who brings Christmas warmth to homes, parties, and community events.',
		intro1:
			'Lincoln stretches across the escarpment bench, taking in Beamsville, Vineland, and Jordan along the way. Vineyards, fruit farms, and rolling countryside shape the area, and the holidays here carry a relaxed, rural charm.',
		intro2:
			'Families in these communities often host at home, where there is room for everyone. Santa is comfortable in that setting, spending time with the children and sharing the kind of easy conversation that makes a visit feel personal rather than staged.',
		services: [
			'A private home visit brings Santa to your door in Beamsville, Vineland, Jordan, or anywhere in Lincoln, gifts and photos included.',
			'Holiday parties and family get-togethers across the township get a warm centrepiece when Santa arrives.',
			'Community events, charity drives, and fundraisers in Lincoln value a Santa who brings people together.',
			'Photo sessions and seasonal promotions can book a Santa who is patient and naturally photogenic.',
			'Schools, preschools, and daycares in the area welcome Santa for gentle storytime with the little ones.',
			'Corporate and workplace gatherings get an elegant touch with a professional Santa on hand.',
		],
		pricingNote:
			'Lincoln is outside the primary areas, so a visit may include extra travel charges. Santa always confirms the exact total with you before your booking.',
		booking: [
			'Reach Santa by phone at (905) 327-9036 or by email at byauch@cogeco.ca.',
			'Let Santa know your Lincoln location, the date, and the kind of event.',
			'He responds to confirm availability and work out the details of the visit.',
		],
		nearby:
			'Lincoln sits next to Grimsby and West Lincoln, and is a reasonable drive from St. Catharines and Pelham. Santa is happy to serve families throughout these neighbouring areas.',
		faqs: [
			{
				q: 'How do I book Santa for a home visit in Lincoln?',
				a: 'Call (905) 327-9036 or email byauch@cogeco.ca with your date and address in Beamsville, Vineland, Jordan, or the surrounding area.',
			},
			{
				q: 'What does a visit cost in Lincoln, and is there a travel fee?',
				a: 'Pricing starts at $125.00 for the first hour, then $50.00 per additional half hour. Lincoln is outside the primary areas, so extra travel charges may apply, quoted in advance.',
			},
			{
				q: 'Is Santa\u2019s beard real?',
				a: 'It is full and natural. That detail makes the visit feel authentic to children and adults alike.',
			},
			{
				q: 'What events does Santa attend around Lincoln?',
				a: 'Bookings include home visits, holiday parties, community and charity events, photo sessions, schools, daycares, and corporate events.',
			},
			{
				q: 'How soon should I reach out?',
				a: 'The busiest dates go first, so it is worth asking early. Availability for Lincoln is confirmed by phone or email.',
			},
		],
	},
	{
		name: 'Pelham',
		slug: 'pelham',
		h1: 'Hire a Santa in Pelham',
		metaTitle: 'Hire Santa Claus in Pelham | Real-Bearded Santa Rental',
		metaDescription:
			'Hire a real-bearded Santa Claus in Pelham, including Fonthill and Fenwick, for home visits, holiday parties and community events. Call (905) 327-9036.',
		region: 'the green town of Fonthill and Fenwick',
		travelIncluded: false,
		photo: 'santa-70.jpg',
		glance: [
			'Homes in Fonthill and Fenwick',
			'Parties for a full house',
			'Green-space community events',
			'Travel charge quoted in advance',
		],
		heroIntro:
			'When you hire a Santa in Pelham, you welcome a real-bearded professional to homes and celebrations in Fonthill, Fenwick, and the surrounding countryside.',
		intro1:
			'Pelham spreads across green countryside south of the escarpment, with Fonthill and Fenwick as the heart of the community. Orchards, trails, and open space give the area a calm, welcoming feel that suits the Christmas season.',
		intro2:
			'Gatherings in Pelham often pull together several families at once, and Santa is right at home in a full room. He balances playfulness with patience, giving each child a moment while the grown-ups enjoy the warmth of the season.',
		services: [
			'A home visit brings Santa to your Pelham door with gifts, photos, and time set aside for every child.',
			'Holiday parties and family get-togethers in Fonthill, Fenwick, and beyond get a lively boost from Santa.',
			'Community events, charity drives, and fundraisers across the township are a natural fit for Santa.',
			'Photo sessions and seasonal retail events can count on a Santa who poses patiently for every shot.',
			'Local schools, preschools, and daycares enjoy a gentle Santa storytime tailored to the children.',
			'Corporate and staff events in the area get a professional Santa for the celebration.',
		],
		pricingNote:
			'Pelham is outside the primary areas, so a booking may include extra travel charges. Santa will confirm the exact total before your visit.',
		booking: [
			'Call (905) 327-9036 or email byauch@cogeco.ca to get started.',
			'Provide your Pelham address, the date, and a little about the event.',
			'Santa confirms availability and the arrangements with you directly.',
		],
		nearby:
			'Pelham is close to Welland and Thorold, with Lincoln and West Lincoln just to the west. Santa is pleased to serve families across these nearby communities.',
		faqs: [
			{
				q: 'How do I arrange a Santa visit in Pelham?',
				a: 'Call (905) 327-9036 or email byauch@cogeco.ca with your date and address in Fonthill, Fenwick, or the surrounding area.',
			},
			{
				q: 'What is the cost of hiring Santa in Pelham?',
				a: 'The rate begins at $125.00 for the first hour and $50.00 for each additional half hour. Pelham is outside the primary areas, so extra travel charges may apply, quoted beforehand.',
			},
			{
				q: 'Does Santa have a genuine beard?',
				a: 'Yes. Santa Claus Niagara has a genuine, full beard, which keeps the experience convincing up close.',
			},
			{
				q: 'What kinds of events does Santa do in Pelham?',
				a: 'Santa handles home visits, parties, community and charity events, photo sessions, school and daycare visits, and corporate gatherings.',
			},
			{
				q: 'How early should I book?',
				a: 'It helps to reach out early, as December fills fast. Your Pelham date can be checked by phone or email.',
			},
		],
	},
	{
		name: 'Wainfleet',
		slug: 'wainfleet',
		h1: 'Hire a Santa in Wainfleet',
		metaTitle: 'Hire Santa Claus in Wainfleet | Real-Bearded Santa Rental',
		metaDescription:
			'Hire a real-bearded Santa Claus in Wainfleet for home visits, holiday parties and community events. Professional Santa for hire. Call (905) 327-9036.',
		region: 'the rural township on Lake Erie',
		travelIncluded: false,
		photo: 'santa-71.jpg',
		glance: [
			'Rural doorstep visits',
			'Unhurried family gatherings',
			'Small-town community events',
			'Travel charge quoted in advance',
		],
		heroIntro:
			'To hire a Santa in Wainfleet, families across the rural township welcome a real-bearded Santa to their homes, parties, and community gatherings.',
		intro1:
			'Wainfleet is quiet, rural, and rooted in farming, with the Lake Erie shoreline to the south and open country in every direction. Christmas out here tends to be unhurried and heart-felt, centred on home and neighbours.',
		intro2:
			'Santa is well suited to that pace. He takes his time, meets the children one by one, and lets the evening unfold naturally instead of running on a clock. For a small township gathering, that personal touch means a great deal.',
		services: [
			'A private Santa visit brings the holiday to your rural Wainfleet home, with gifts, photos, and room for everyone.',
			'Holiday parties and family get-togethers around the township get a warm lift when Santa arrives.',
			'Community events, charity drives, and fundraisers in Wainfleet value a Santa who brings people together.',
			'Photo sessions and seasonal events can book a patient, photogenic Santa.',
			'Schools, preschools, and daycares in the area enjoy Santa storytime with the children.',
			'Workplace and staff gatherings get a professional Santa to mark the season.',
		],
		pricingNote:
			'Wainfleet is outside the primary areas, so events here may include extra travel charges. Santa always quotes the exact total before your booking.',
		booking: [
			'Phone (905) 327-9036 or write to Santa at byauch@cogeco.ca.',
			'Share your Wainfleet address, the date, and the kind of event you are planning.',
			'Santa confirms the details with you once he checks availability.',
		],
		nearby:
			'Wainfleet is close to Port Colborne and Fort Erie, and a short drive from Welland. Santa is happy to serve families in these neighbouring communities.',
		faqs: [
			{
				q: 'How do I book Santa for a home visit in Wainfleet?',
				a: 'Call (905) 327-9036 or email byauch@cogeco.ca with your date and rural address, and Santa will confirm personally.',
			},
			{
				q: 'What does a visit cost in Wainfleet?',
				a: 'A visit runs $125.00 for the first hour, then $50.00 for each additional half hour. Wainfleet is outside the primary areas, so extra travel charges may apply, quoted in advance.',
			},
			{
				q: 'Is the beard genuine?',
				a: 'Yes, a real full beard. It is one of the reasons children accept him as the genuine Santa.',
			},
			{
				q: 'What events does Santa attend in Wainfleet?',
				a: 'He is available for home visits, holiday parties, community and charity events, photo sessions, schools, daycares, and corporate events.',
			},
			{
				q: 'When should I enquire?',
				a: 'Early is best as the season fills. Availability for your Wainfleet date is confirmed by phone or email.',
			},
		],
	},
	{
		name: 'West Lincoln',
		slug: 'west-lincoln',
		h1: 'Hire a Santa in West Lincoln',
		metaTitle: 'Hire Santa Claus in West Lincoln | Real-Bearded Santa Rental',
		metaDescription:
			'Hire a real-bearded Santa Claus in West Lincoln, including Smithville, for home visits, holiday parties and community events. Call (905) 327-9036.',
		region: 'farming country around Smithville',
		travelIncluded: false,
		photo: 'santa-72.jpg',
		glance: [
			'Homes in Smithville and the countryside',
			'Farm-country family gatherings',
			'Neighbourly community events',
			'Travel charge quoted in advance',
		],
		heroIntro:
			'Hire a Santa in West Lincoln and welcome a real-bearded Santa to homes, parties, and community events in Smithville and the surrounding farming communities.',
		intro1:
			'West Lincoln is farming country at the western edge of Niagara, with Smithville as its friendly hub. Wide fields and small communities give the area a close, neighbourly feel that comes through in how people celebrate Christmas together.',
		intro2:
			'Santa fits that spirit well. At a West Lincoln gathering he is unhurried and approachable, giving the children their moment and joining the adults in the kind of easy conversation that makes an evening feel like home.',
		services: [
			'A private visit brings Santa to your West Lincoln door, gifts in hand and time for every child.',
			'Holiday parties and family get-togethers in Smithville and across the township get a festive boost from Santa.',
			'Community events, charity drives, and fundraisers in West Lincoln welcome a Santa who brings people together.',
			'Photo sessions and seasonal events can book a Santa who stays patient and photogenic.',
			'Local schools, preschools, and daycares enjoy a gentle Santa storytime with the children.',
			'Corporate and staff events get a professional Santa to mark the season.',
		],
		pricingNote:
			'West Lincoln is outside the primary areas, so a visit may include extra travel charges. Santa will confirm the exact total with you beforehand.',
		booking: [
			'Call (905) 327-9036 or email byauch@cogeco.ca to start.',
			'Let Santa know your West Lincoln address, the date, and the type of event.',
			'He confirms availability and the final details with you directly.',
		],
		nearby:
			'West Lincoln is close to Grimsby, Lincoln, and Pelham. Santa is glad to serve families in these nearby communities too.',
		faqs: [
			{
				q: 'How do I arrange a home visit in West Lincoln?',
				a: 'Call (905) 327-9036 or email byauch@cogeco.ca with your date and address in Smithville or the surrounding area.',
			},
			{
				q: 'What does a visit cost in West Lincoln, and is travel extra?',
				a: 'Santa\u2019s rate is $125.00 for the first hour and $50.00 per additional half hour. West Lincoln is outside the primary areas, so extra travel charges may apply, quoted in advance.',
			},
			{
				q: 'Does Santa sport a real beard?',
				a: 'He does, and it is genuine and full. That is part of what makes the visit so convincing for children.',
			},
			{
				q: 'What kinds of events does Santa do in West Lincoln?',
				a: 'Santa\u2019s visits cover homes, parties, community and charity events, photo sessions, schools and daycares, and corporate events.',
			},
			{
				q: 'How soon should I book?',
				a: 'The holiday season books early, so it is best to ask soon. West Lincoln availability is checked by phone or email.',
			},
		],
	},
];

export function getCity(slug: string) {
	return cities.find((city) => city.slug === slug);
}
