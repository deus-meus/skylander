export interface FaqItem {
	id: string;
	question: string;
	answer: string;
	category: string;
}

export const faqs: FaqItem[] = [
	{
		id: "faq-01",
		question: "1. Apa itu skylander.co.id?",
		answer:
			"skylander.co.id adalah website resmi dari CV Skylander yang menyediakan jasa konstruksi dengan berbagai jenis layanan untuk proyek konstruksi, termasuk desain arsitektur, perencanaan struktur, pengawasan konstruksi, dan sebagainya.",
		category: "Umum",
	},
	{
		id: "faq-02",
		question:
			"2. Apa jenis layanan konstruksi yang ditawarkan oleh CV Skylander?",
		answer:
			"1. Konstruksi Gedung Perkantoran\n2. Konstruksi Bangunan Sipil\n3. Jasa Bangunan Hunian\n4. Konstruksi Prasarana Sumber Daya Air\n5. Jasa Renovasi\n6. Jasa Desain Arsitektur",
		category: "Layanan",
	},
	{
		id: "faq-03",
		question: "3. Apakah Skylander hanya melayani proyek skala besar?",
		answer:
			"Tidak, CV Skylander melayani berbagai skala proyek konstruksi, baik proyek skala kecil, menengah, maupun besar. Tim kami akan membantu Anda dalam merencanakan dan melaksanakan proyek konstruksi sesuai dengan kebutuhan Anda.",
		category: "Skala Layanan",
	},
	{
		id: "faq-04",
		question: "4. Bagaimana cara memesan layanan konstruksi dari CV Skylander?",
		answer:
			"Untuk memesan layanan konstruksi Kami, Anda dapat menghubungi tim Kami melalui nomor telepon yang tercantum di website kami atau melalui halaman kontak. Lalu silahkan Anda mendiskusikan kebutuhan proyek pada Kami.",
		category: "Pemesanan",
	},
	{
		id: "faq-05",
		question:
			"5. Apakah skylander.co.id memberikan jaminan kualitas untuk layanan konstruksinya?",
		answer:
			"Ya, Skylander memberikan jaminan kualitas untuk layanan. Kami memiliki tim yang terampil dan berpengalaman serta menggunakan bahan dan metode konstruksi berkualitas tinggi untuk memastikan kepuasan pelanggan dan keberhasilan proyek.",
		category: "Kualitas & Garansi",
	},
];
