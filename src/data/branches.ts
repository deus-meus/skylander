export interface BranchOffice {
	id: string;
	name: string;
	type: string;
	region: string;
	address: string;
	city: string;
	province: string;
	postalCode: string;
	coordinates: string;
	operatingHours: string;
	leadEngineer: string;
	specialty: string;
	mapsUrl: string;
	whatsappMessage: string;
	image: string;
}

export const branches: BranchOffice[] = [
	{
		id: "makassar",
		name: "Kantor Pusat",
		type: "Kantor Pusat",
		region: "Sulawesi Selatan",
		address:
			"Jl. Goa Ria , Sudiang, Kec. Biringkanaya, Kota Makassar, Sulawesi Selatan 90552",
		city: "Makassar",
		province: "Sulawesi Selatan",
		postalCode: "90552",
		coordinates: "-5.0741° S, 119.5312° E",
		operatingHours: "Senin - Sabtu: 07.00 - 16.00",
		leadEngineer: "Divisi Rekayasa Sipil & Arsitektur Pusat",
		specialty:
			"Kantor pusat operasional CV. Skylander yang melayani perencanaan, manajemen proyek, dan konstruksi di wilayah Makassar dan Sulawesi Selatan.",
		mapsUrl: "https://maps.google.com/?q=Jl.+Goa+Ria+Sudiang+Makassar",
		whatsappMessage:
			"Halo Kantor Pusat CV. Skylander Makassar, saya ingin berkonsultasi mengenai rencana proyek konstruksi.",
		image: "/images/original/Home-1.webp",
	},
	{
		id: "jayapura",
		name: "Kantor Cabang Jayapura",
		type: "Cabang Papua",
		region: "Papua",
		address: "Jl. Alternatif, Kota Jayapura, Papua",
		city: "Kota Jayapura",
		province: "Papua",
		postalCode: "99221",
		coordinates: "-2.5337° S, 140.7181° E",
		operatingHours: "Senin - Sabtu: 07.00 - 16.00",
		leadEngineer: "Tim Lapangan & Konstruksi Papua",
		specialty:
			"Melayani konstruksi bangunan sipil, gedung perkantoran, prasarana sumber daya air, dan renovasi di wilayah Jayapura dan Papua.",
		mapsUrl: "https://maps.google.com/?q=Jl.+Alternatif+Kota+Jayapura+Papua",
		whatsappMessage:
			"Halo Cabang CV. Skylander Jayapura, saya ingin berkonsultasi mengenai rencana proyek di wilayah Papua.",
		image: "/images/stitch/stitch_10_d983c13249.webp",
	},
	{
		id: "toraja",
		name: "Kantor Cabang Toraja",
		type: "Cabang Toraja",
		region: "Sulawesi Selatan",
		address: "Kec. Makale, Kabupaten Tana Toraja, Sulawesi Selatan 91817",
		city: "Tana Toraja",
		province: "Sulawesi Selatan",
		postalCode: "91817",
		coordinates: "-3.1009° S, 119.8519° E",
		operatingHours: "Senin - Sabtu: 07.00 - 16.00",
		leadEngineer: "Tim Konstruksi & Renovasi Toraja",
		specialty:
			"Melayani pembangunan bangunan hunian, gedung, renovasi, dan penataan landscape di wilayah Makale dan Kabupaten Tana Toraja.",
		mapsUrl:
			"https://maps.google.com/?q=Makale+Kabupaten+Tana+Toraja+Sulawesi+Selatan",
		whatsappMessage:
			"Halo Cabang CV. Skylander Toraja, saya ingin berkonsultasi mengenai pembangunan / renovasi di kawasan Tana Toraja.",
		image: "/images/stitch/stitch_08_31fb316742.webp",
	},
];
