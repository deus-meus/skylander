export interface CompanyInfo {
	name: string;
	legalName: string;
	tagline: string;
	establishedYear: number;
	experienceYears: string;
	projectsCompleted: string;
	satisfactionRate: string;
	complianceRate: string;
	phone: string;
	phoneFormatted: string;
	email: string;
	operatingHours: string;
	operatingDays: string;
	primaryAddress: string;
	whatsappNumber: string;
}

export const company: CompanyInfo = {
	name: "CV. Skylander",
	legalName: "CV. Skylander Indonesia",
	tagline: "Presisi Rekayasa & Transformasi Bangunan Berkelanjutan",
	establishedYear: 2011,
	experienceYears: "15+ Tahun",
	projectsCompleted: "368+ Proyek",
	satisfactionRate: "96%",
	complianceRate: "100%",
	phone: "+6282342270000",
	phoneFormatted: "0823 4227 0000",
	email: "skylanderpapua@gmail.com",
	operatingHours: "07.00 - 16.00 WITA / WIT",
	operatingDays: "Senin - Sabtu (Minggu Libur)",
	primaryAddress:
		"Jl. Goa Ria, Sudiang, Kec. Biringkanaya, Kota Makassar, Sulawesi Selatan 90552",
	whatsappNumber: "6282342270000",
};

export function createWhatsAppUrl(message?: string): string {
	const defaultMessage =
		"Halo CV. Skylander, saya ingin berkonsultasi mengenai rencana proyek pembangunan / renovasi.";
	const text = encodeURIComponent(message || defaultMessage);
	return `https://wa.me/${company.whatsappNumber}?text=${text}`;
}
