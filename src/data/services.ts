export interface ServiceScopeCard {
	icon: string;
	title: string;
	desc: string;
}

export interface ServiceItem {
	id: string;
	number: string;
	title: string;
	shortTitle: string;
	slug: string;
	category: string;
	categoryTag: string;
	description: string;
	headerSummary: string;
	overviewTitle: string;
	fullDescription: string;
	secondaryDescription: string;
	badgeLeft: string;
	badgeRight: string;
	scopeCards: ServiceScopeCard[];
	scope: string[];
	technicalSpecs: string[];
	image: string;
	specTag: string;
}

export const services: ServiceItem[] = [
	{
		id: "kantor",
		number: "01",
		title: "Konstruksi Gedung Perkantoran",
		shortTitle: "Gedung Perkantoran",
		slug: "konstruksi-gedung-perkantoran",
		category: "Komersial & Perkantoran",
		categoryTag: "REKAYASA STRUKTUR & KOMERSIAL",
		description:
			"Membangun gedung perkantoran mulai dari perencanaan hingga penyelesaian.",
		headerSummary:
			"Membangun gedung perkantoran modern yang memenuhi standar keselamatan, kualitas, dan fungsionalitas kerja.",
		overviewTitle: "Pembangunan Gedung Perkantoran Berstandar SNI",
		fullDescription:
			"Konstruksi gedung perkantoran melibatkan pembangunan dan pengembangan bangunan yang dirancang khusus untuk fungsi perkantoran.",
		secondaryDescription:
			"Tim profesional Kami terdiri dari arsitek, insinyur sipil, dan ahli konstruksi bekerja sama untuk menghasilkan bangunan yang memenuhi standar keselamatan, kualitas, dan fungsionalitas.",
		badgeLeft: "KONSTRUKSI GEDUNG PERKANTORAN",
		badgeRight: "Standar Mutu: SNI & K3",
		scopeCards: [
			{
				icon: "foundation",
				title: "Struktur & Pondasi Utama",
				desc: "Konstruksi pondasi dan rangka gedung bertingkat berstandar SNI tahan gempa.",
			},
			{
				icon: "electrical_services",
				title: "Instalasi MEP Terpadu",
				desc: "Pemasangan jaringan listrik, tata udara gedung, perpipaan, dan proteksi keselamatan.",
			},
			{
				icon: "domain",
				title: "Fasad & Interior Kantor",
				desc: "Pengerjaan eksterior modern dan penataan ruang kerja yang nyaman serta produktif.",
			},
			{
				icon: "verified_user",
				title: "Standar K3 & Mutu",
				desc: "Pengawasan mutu material ketat dan penerapan prosedur keselamatan kerja di lapangan.",
			},
		],
		scope: [
			"Perencanaan & Desain Arsitektur Gedung Kantor",
			"Konstruksi Struktur Utama & Rangka Gedung",
			"Pekerjaan Eksterior, Fasad & Interior Ruang Kerja",
			"Instalasi Utilitas Mekanikal & Elektrikal Gedung",
		],
		technicalSpecs: [
			"Desain inovatif & kekinian",
			"Pengerjaan Tepat Waktu",
			"Teknologi Modern",
			"Ramah Lingkungan",
		],
		image: "/images/stitch/stitch_05_9b5c3d9c92.webp",
		specTag: "GEDUNG PERKANTORAN",
	},
	{
		id: "sipil",
		number: "02",
		title: "Konstruksi Bangunan Sipil",
		shortTitle: "Bangunan Sipil",
		slug: "konstruksi-bangunan-sipil",
		category: "Infrastruktur & Utilitas",
		categoryTag: "INFRASTRUKTUR & REKAYASA SIPIL",
		description:
			"Pengembangan berbagai jenis struktur bangunan yang terkait dengan infrastruktur dan utilitas publik.",
		headerSummary:
			"Mewujudkan infrastruktur publik dan swasta yang kokoh, andal, serta berkelanjutan.",
		overviewTitle: "Mewujudkan Infrastruktur yang Kokoh dan Berkelanjutan",
		fullDescription:
			"Anda mencari jasa konstruksi bangunan sipil yang dapat diandalkan, berkualitas, dan inovatif? Kami adalah penyedia jasa konstruksi terkemuka yang siap memberikan solusi terbaik bagi kebutuhan konstruksi bangunan sipil Anda.",
		secondaryDescription:
			"Setiap proyek konstruksi memiliki kebutuhan dan tantangan unik. Oleh karena itu, Kami siap memberikan solusi yang disesuaikan dengan kebutuhan spesifik Anda.",
		badgeLeft: "INFRASTRUKTUR & BANGUNAN SIPIL",
		badgeRight: "Spesifikasi: Mutu Beton SNI",
		scopeCards: [
			{
				icon: "add_road",
				title: "Pembangunan Jalan & Jembatan",
				desc: "Perkerasan jalan, jembatan beton/baja, gorong-gorong, dan dinding penahan tanah.",
			},
			{
				icon: "directions_boat",
				title: "Pelabuhan, Dermaga & Terowongan",
				desc: "Konstruksi fasilitas pelabuhan, dermaga logistik, dan terowongan infrastruktur.",
			},
			{
				icon: "stadium",
				title: "Stadion & Fasilitas Olahraga",
				desc: "Pembangunan struktur stadion dan gedung sarana olahraga berkapasitas tinggi.",
			},
			{
				icon: "school",
				title: "Prasarana Pendidikan & Publik",
				desc: "Pengembangan gedung pendidikan, fasilitas umum, dan utilitas publik daerah.",
			},
		],
		scope: [
			"Pembangunan jalan dan jembatan",
			"Pembangunan terowongan",
			"Pembangunan pelabuhan dan dermaga",
			"Pembangunan stadion dan fasilitas olahraga",
			"Pembangunan prasarana pendidikan",
		],
		technicalSpecs: [
			"Desain inovatif & kekinian",
			"Pengerjaan Tepat Waktu",
			"Teknologi Modern",
			"Ramah Lingkungan",
		],
		image: "/images/stitch/stitch_10_d983c13249.webp",
		specTag: "BANGUNAN SIPIL",
	},
	{
		id: "hunian",
		number: "03",
		title: "Konstruksi Bangunan Hunian",
		shortTitle: "Bangunan Hunian",
		slug: "konstruksi-bangunan-hunian",
		category: "Residensial & Hunian",
		categoryTag: "ARSITEKTUR RESIDENSIAL & HUNIAN",
		description:
			"Pembangunan dan pengembangan berbagai jenis bangunan tempat tinggal dan hunian.",
		headerSummary:
			"Mewujudkan hunian impian dengan kualitas terbaik, desain terbaru, dan struktur yang aman.",
		overviewTitle: "Kualitas Layanan Terbaik & Keamanan Hunian Terjamin",
		fullDescription:
			"Apakah Anda sedang merencanakan pembangunan untuk hunian impian Anda? Jika ya, jasa konstruksi bangunan hunian Skylander siap membantu mewujudkannya.",
		secondaryDescription:
			"Tim Skylander berkomitmen untuk memberikan kualitas layanan terbaik, desain yang menarik dan terbaru, serta keamanan yang terjamin.",
		badgeLeft: "KONSTRUKSI BANGUNAN HUNIAN",
		badgeRight: "Jaminan Mutu & Keamanan",
		scopeCards: [
			{
				icon: "home_work",
				title: "Perencanaan & Desain Hunian",
				desc: "Tata ruang rumah tinggal yang nyaman, sehat, dan optimal dengan pencahayaan alami.",
			},
			{
				icon: "foundation",
				title: "Struktur Beton Bertulang",
				desc: "Pengerjaan pondasi, kolom, dan balok rumah dengan material berkualitas tinggi.",
			},
			{
				icon: "format_paint",
				title: "Finishing Eksterior & Interior",
				desc: "Pemasangan lantai, dinding, plafon, dan fasad rumah dengan hasil rapi presisi.",
			},
			{
				icon: "plumbing",
				title: "Instalasi Listrik & Sanitasi",
				desc: "Pemasangan jaringan listrik aman, pipa air bersih, dan sanitasi bebas bocor.",
			},
		],
		scope: [
			"Perencanaan dan Desain Rumah Tinggal",
			"Pembangunan Struktur Bangunan Hunian Baru",
			"Pekerjaan Dinding, Atap, Plafon & Lantai",
			"Instalasi Kelistrikan dan Sanitasi Air Bersih",
			"Finishing Eksterior & Interior Lengkap",
		],
		technicalSpecs: [
			"Desain inovatif & kekinian",
			"Pengerjaan Tepat Waktu",
			"Teknologi Modern",
			"Ramah Lingkungan",
		],
		image: "/images/stitch/stitch_04_aeb248ed94.webp",
		specTag: "KONSTRUKSI HUNIAN",
	},
	{
		id: "air",
		number: "04",
		title: "Konstruksi Prasarana Sumber Daya Air",
		shortTitle: "Prasarana Air",
		slug: "konstruksi-prasarana-sumber-daya-air",
		category: "Manajemen Air & Irigasi",
		categoryTag: "REKAYASA HIDROLIKA & SUMBER DAYA AIR",
		description:
			"Kami juga melayani pembangunan berbagai fasilitas yang terkait dengan manajemen air.",
		headerSummary:
			"Solusi berkualitas tinggi dalam membangun dan memperbaiki proyek prasarana sumber daya air.",
		overviewTitle: "Layanan Konstruksi Prasarana Sumber Daya Air",
		fullDescription:
			"CV Skylander berdedikasi untuk menyediakan solusi berkualitas tinggi dan inovatif dalam membangun dan memperbaiki proyek-proyek yang berhubungan dengan prasarana sumber daya air.",
		secondaryDescription:
			"Kami adalah mitra yang dapat diandalkan dan berpengalaman dalam menyediakan jasa Konstruksi Prasarana Sumber Daya Air.",
		badgeLeft: "PRASARANA SUMBER DAYA AIR",
		badgeRight: "KBLI 42911 & 42201",
		scopeCards: [
			{
				icon: "water",
				title: "Bendungan, Waduk & Irigasi",
				desc: "Pembangunan bendungan, waduk penampungan, dan jaringan saluran irigasi.",
			},
			{
				icon: "valve",
				title: "Jaringan Pipa & Pengelolaan Air",
				desc: "Instalasi jaringan pipa distribusi air bersih dan fasilitas pengelolaan air.",
			},
			{
				icon: "flood",
				title: "Drainase & Penanggulangan Banjir",
				desc: "Pembangunan saluran drainase dan struktur pengendali banjir perkotaan.",
			},
			{
				icon: "engineering",
				title: "Struktur Saluran Kedap Air",
				desc: "Pengecoran dinding saluran dan talud penahan air bermutu tinggi.",
			},
		],
		scope: [
			"Pembangunan bendungan dan waduk",
			"Pembangunan saluran irigasi",
			"Pembangunan jaringan pipa air",
			"Instalasi pengelolaan air",
			"Pembangunan saluran drainase",
			"Pembangunan penanggulangan banjir",
		],
		technicalSpecs: [
			"Desain inovatif & kekinian",
			"Pengerjaan Tepat Waktu",
			"Teknologi Modern",
			"Ramah Lingkungan",
		],
		image: "/images/stitch/stitch_06_322bf1b092.webp",
		specTag: "SUMBER DAYA AIR",
	},
	{
		id: "renovasi",
		number: "05",
		title: "Jasa Renovasi",
		shortTitle: "Jasa Renovasi",
		slug: "jasa-renovasi",
		category: "Perbaikan & Pembaruan",
		categoryTag: "RESTORASI & PEMBARUAN BANGUNAN",
		description:
			"Melayani pekerjaan untuk memperbarui, memperbaiki, atau mengubah bangunan yang sudah ada.",
		headerSummary:
			"Memperbaiki kondisi bangunan, meningkatkan fungsionalitas, dan memodernisasi desain sesuai kebutuhan Anda.",
		overviewTitle: "Pembaruan Bangunan & Infrastruktur Sesuai Kebutuhan",
		fullDescription:
			"Memperbaiki kondisi bangunan, meningkatkan fungsionalitas, memodernisasi dan meningkatkan desain, meningkatkan efisiensi, penyesuaian dengan perubahan kebutuhan adalah tujuan utama dari layanan renovasi dari Kami.",
		secondaryDescription:
			"Tim Kami siap membantu Anda memperbarui segala bangunan dan infrastruktur sesuai dengan kebutuhan dan anggaran Anda.",
		badgeLeft: "JASA RENOVASI BANGUNAN",
		badgeRight: "Eksekusi Rapi & Transparan",
		scopeCards: [
			{
				icon: "weekend",
				title: "Renovasi Interior",
				desc: "Penataan ulang ruangan, pemilihan material tepat, dan pembaruan tata letak dalam.",
			},
			{
				icon: "storefront",
				title: "Renovasi Eksterior",
				desc: "Pembaruan muka bangunan (fasad), perbaikan atap, dan peningkatan nilai estetika luar.",
			},
			{
				icon: "architecture",
				title: "Pembaruan Struktural",
				desc: "Analisis menyeluruh dan perkuatan struktur rumah agar aman dan tahan lama.",
			},
			{
				icon: "add_home_work",
				title: "Pembangunan Tambahan",
				desc: "Penambahan teras, ruang kamar baru, atau ruang serbaguna yang fungsional.",
			},
		],
		scope: [
			"Renovasi Interior & Penataan Ulang Ruangan",
			"Renovasi Eksterior & Pembaruan Muka Bangunan",
			"Pembaruan & Perkuatan Struktural Bangunan",
			"Pembangunan Tambahan (Teras, Kamar, Ruang Serbaguna)",
		],
		technicalSpecs: [
			"Desain inovatif & kekinian",
			"Pengerjaan Tepat Waktu",
			"Teknologi Modern",
			"Ramah Lingkungan",
		],
		image: "/images/stitch/stitch_07_d2aed24740.webp",
		specTag: "JASA RENOVASI",
	},
	{
		id: "lanskap",
		number: "06",
		title: "Pekerjaan Landscape dan Taman",
		shortTitle: "Landscape & Taman",
		slug: "jasa-lanskap",
		category: "Eksterior & Taman",
		categoryTag: "ARSITEKTUR LANSKAP & TATA HIJAU",
		description:
			"Kami memiliki tim ahli merancang, membangun, dan merawat taman dan lingkungan luar ruangan lainnya.",
		headerSummary:
			"Merancang, membangun, dan merawat taman serta lingkungan luar ruangan yang indah dan asri.",
		overviewTitle: "Keahlian Merancang, Membangun & Merawat Landscape",
		fullDescription:
			"Menggunakan jasa Landscape merupakan langkah penting dalam sebuah konstruksi bangunan. Jasa landscape Kami siap merancang, membangun, dan merawat taman dan lingkungan luar ruangan.",
		secondaryDescription:
			"Kami memiliki tim ahli Landscape yang berpengalaman dalam menciptakan lingkungan luar ruangan yang indah nan elok dipandang.",
		badgeLeft: "PEKERJAAN LANDSCAPE & TAMAN",
		badgeRight: "Tata Hijau Berkelanjutan",
		scopeCards: [
			{
				icon: "park",
				title: "Desain Landscape",
				desc: "Perencanaan konsep taman, tata hijau, dan pemilihan tanaman yang selaras bangunan.",
			},
			{
				icon: "landscape",
				title: "Pembangunan Landscape",
				desc: "Pengerjaan taman, batu alam, jalur pedestrian, dan pencahayaan luar ruangan.",
			},
			{
				icon: "water_drop",
				title: "Drainase & Resapan Taman",
				desc: "Pengaturan sistem pengairan dan resapan agar taman subur serta bebas genangan.",
			},
			{
				icon: "eco",
				title: "Perawatan Landscape",
				desc: "Pemeliharaan rutin tanaman dan elemen taman agar selalu rapi dan asri.",
			},
		],
		scope: ["Desain landscape", "Pembangunan Landscape", "Perawatan Landscape"],
		technicalSpecs: [
			"Desain inovatif & kekinian",
			"Pengerjaan Tepat Waktu",
			"Teknologi Modern",
			"Ramah Lingkungan",
		],
		image: "/images/stitch/stitch_08_31fb316742.webp",
		specTag: "LANDSCAPE & TAMAN",
	},
	{
		id: "arsitektur",
		number: "07",
		title: "Jasa Desain Arsitektur",
		shortTitle: "Desain Arsitektur",
		slug: "jasa-desain-arsitektur",
		category: "Desain & Perencanaan",
		categoryTag: "PERENCANAAN ARSITEKTUR & STRUKTUR",
		description:
			"Merancang konsep arsitektur, perencanaan struktur, serta tata lingkungan bangunan yang estetis dan fungsional.",
		headerSummary:
			"Perencanaan konsep desain arsitektur, gambar kerja teknis, dan penyusunan estimasi anggaran yang tepat.",
		overviewTitle: "Perencanaan Matang & Desain Arsitektur Fungsional",
		fullDescription:
			"Kami mempelajari detail kebutuhan proyek Anda untuk menghasilkan desain arsitektur dan tata ruang yang sesuai dengan visi serta anggaran Anda.",
		secondaryDescription:
			"Tim kami memperhatikan setiap detail mulai dari tata letak ruangan, ukuran, pemilihan material, hingga perhitungan struktur yang aman.",
		badgeLeft: "JASA DESAIN ARSITEKTUR",
		badgeRight: "Dokumen Gambar Siap Bangun",
		scopeCards: [
			{
				icon: "draw",
				title: "Konsep Denah & Tata Ruang",
				desc: "Perancangan tata letak ruangan yang fungsional, nyaman, dan efisien.",
			},
			{
				icon: "view_in_ar",
				title: "Visualisasi Desain 3D",
				desc: "Gambaran tampilan eksterior dan interior bangunan yang jelas sebelum dibangun.",
			},
			{
				icon: "architecture",
				title: "Gambar Kerja Teknis",
				desc: "Dokumen gambar kerja detail sebagai pedoman presisi pelaksanaan di lapangan.",
			},
			{
				icon: "calculate",
				title: "Penyusunan Rencana Anggaran",
				desc: "Perhitungan estimasi biaya konstruksi (RAB) yang transparan sesuai anggaran.",
			},
		],
		scope: [
			"Desain Arsitektur & Konsep Tata Ruang",
			"Perencanaan Struktur & Gambar Kerja Teknis",
			"Desain & Pembangunan Landscape",
		],
		technicalSpecs: [
			"Desain inovatif & kekinian",
			"Pengerjaan Tepat Waktu",
			"Teknologi Modern",
			"Ramah Lingkungan",
		],
		image: "/images/stitch/stitch_09_121b7fe264.webp",
		specTag: "DESAIN ARSITEKTUR",
	},
];
