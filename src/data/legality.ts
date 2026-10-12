export interface LegalityDoc {
	id: string;
	title: string;
	code: string;
	issuer: string;
	description: string;
	imageUrl: string;
	inStandardPage: boolean;
}

export const legalityDocuments: LegalityDoc[] = [
	{
		id: "doc-01",
		title: "Perizinan Berusaha Berbasis Risiko — Nomor Induk Berusaha (NIB)",
		code: "NIB: 0254010030919",
		issuer: "Pemerintah Republik Indonesia",
		description:
			"Nomor Induk Berusaha (NIB: 0254010030919) atas nama CV SKYLANDER sebagai identitas resmi pelaku usaha konstruksi.",
		imageUrl: "/images/legality/PROFIL-LENGKAP-01.webp",
		inStandardPage: true,
	},
	{
		id: "doc-02",
		title: "Lampiran Perizinan Berusaha — Daftar Bidang Usaha (KBLI)",
		code: "LAMPIRAN NIB: 0254010030919",
		issuer: "Pemerintah Republik Indonesia",
		description:
			"Lampiran daftar bidang usaha KBLI 42201 (Konstruksi Jaringan Irigasi dan Drainase) klasifikasi risiko Menengah Tinggi.",
		imageUrl: "/images/legality/PROFIL-LENGKAP-02.webp",
		inStandardPage: true,
	},
	{
		id: "doc-03",
		title: "Perizinan Berusaha Berbasis Risiko — Sertifikat Standar",
		code: "SERTIFIKAT STANDAR: 02540100309190006",
		issuer: "Pemerintah Republik Indonesia",
		description:
			"Sertifikat Standar pelaksanaan kegiatan usaha KBLI 42911 (Konstruksi Bangunan Prasarana Sumber Daya Air).",
		imageUrl: "/images/legality/PROFIL-LENGKAP-03.webp",
		inStandardPage: true,
	},
	{
		id: "doc-04",
		title:
			"Lampiran Sertifikat Standar — Kemampuan Badan Usaha Jasa Konstruksi",
		code: "LAMPIRAN STANDAR: 02540100309190006",
		issuer: "Kementerian PUPR RI",
		description:
			"Rincian pemenuhan standar penetapan kemampuan badan usaha jasa konstruksi KBLI 42911 klasifikasi Menengah Tinggi.",
		imageUrl: "/images/legality/PROFIL-LENGKAP-04.webp",
		inStandardPage: true,
	},
	{
		id: "doc-05",
		title: "Sertifikat Badan Usaha (SBU) Konstruksi",
		code: "PB-UMKU: 025401003091900110003",
		issuer: "Pemerintah Republik Indonesia • Kementerian PUPR",
		description:
			"Perizinan Berusaha Untuk Menunjang Kegiatan Usaha (PB-UMKU) Sertifikat Badan Usaha (SBU) Konstruksi CV SKYLANDER.",
		imageUrl: "/images/legality/PROFIL-LENGKAP-05.webp",
		inStandardPage: true,
	},
	{
		id: "doc-06",
		title: "Sertifikat Badan Usaha Jasa Pelaksana Konstruksi (LPJK)",
		code: "NO. REGISTRASI: 0 - 9471 - 07 - 002 - 1 - 26 - 010442",
		issuer: "Lembaga Pengembangan Jasa Konstruksi (LPJK)",
		description:
			"Sertifikat Badan Usaha Jasa Pelaksana Konstruksi resmi atas nama SKYLANDER, CV berdasarkan UU No. 2 Tahun 2017.",
		imageUrl: "/images/legality/PROFIL-LENGKAP-6.webp",
		inStandardPage: false,
	},
	{
		id: "doc-07",
		title: "Surat Izin Tempat Usaha (SITU) Kontraktor",
		code: "NOMOR: 503/08136/PM&PTSP",
		issuer: "Dinas Penanaman Modal & PTSP",
		description:
			"Surat Izin Tempat Usaha resmi CV. SKYLANDER bidang usaha kontraktor.",
		imageUrl: "/images/legality/PROFIL-LENGKAP-7.webp",
		inStandardPage: false,
	},
	{
		id: "doc-08",
		title: "Lampiran Perizinan Berusaha — Kantor Cabang Administrasi",
		code: "LAMPIRAN CABANG NIB: 0254010030919",
		issuer: "Pemerintah Republik Indonesia",
		description:
			"Daftar kantor cabang administrasi resmi CV SKYLANDER untuk usaha konstruksi bangunan sipil jalan.",
		imageUrl: "/images/legality/PROFIL-LENGKAP-8.webp",
		inStandardPage: true,
	},
	{
		id: "doc-09",
		title: "Pendaftaran Kepesertaan BPJS Ketenagakerjaan (OSS)",
		code: "NIB: 0254010030919 • 01 OKTOBER 2020",
		issuer: "Pemerintah Republik Indonesia",
		description:
			"Bukti pencatatan kepesertaan BPJS Ketenagakerjaan sesuai ketentuan Undang-Undang No. 24 Tahun 2011.",
		imageUrl: "/images/legality/PROFIL-LENGKAP-9.webp",
		inStandardPage: true,
	},
	{
		id: "doc-12",
		title: "Surat Keterangan Pendaftaran Perubahan CV SKYLANDER",
		code: "NOMOR: AHU-0013878-AH.01.16 TAHUN 2022",
		issuer: "Ditjen Administrasi Hukum Umum • Kemenkumham RI",
		description:
			"Pengesahan pendaftaran perubahan Akta Nomor 94 tanggal 14 Maret 2022 pada Sistem Administrasi Badan Usaha.",
		imageUrl: "/images/legality/PROFIL-LENGKAP-12.webp",
		inStandardPage: true,
	},
	{
		id: "doc-10",
		title: "Sertifikat Kepesertaan BPJS Ketenagakerjaan",
		code: "NOMOR: 180000000469800 • NPP: 18143267",
		issuer: "BPJS Ketenagakerjaan RI",
		description:
			"Sertifikat resmi kepesertaan badan usaha CV SKYLANDER dalam jaminan sosial ketenagakerjaan sesuai UU No. 24 Tahun 2011.",
		imageUrl: "/images/legality/PROFIL-LENGKAP-10.webp",
		inStandardPage: true,
	},
	{
		id: "doc-11",
		title: "Kartu Tanda Anggota Biasa GAPENSI",
		code: "NO. REGISTRASI: 02.2018.94.9471.008824",
		issuer: "Gabungan Pelaksana Konstruksi Nasional Indonesia",
		description:
			"Tanda keanggotaan resmi CV. SKYLANDER pada asosiasi Gabungan Pelaksana Konstruksi Nasional Indonesia (GAPENSI).",
		imageUrl: "/images/legality/PROFIL-LENGKAP-11.webp",
		inStandardPage: true,
	},
];
