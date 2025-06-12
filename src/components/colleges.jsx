import { Link } from "react-router-dom";
import "../styles/colleges.css";
import { useState, useEffect, useRef, useCallback } from "react";
import Footer from "./footer";

function Colleges() {
  const [openFilters, setOpenFilters] = useState([]);
  const [visibleColleges, setVisibleColleges] = useState(15);
  const [searchTerms, setSearchTerms] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loadMoreRef = useRef(null);
  const observerRef = useRef(null);
   const colleges = [
    
    {
     
      id: "IIT Bhubaneswar ",
      name: "IIT Bhubaneswar",
      city: "Bhubaneswar",
      state: " Odisha ",
      image: "public/img/clg/IIT-Bhubaneswar.jpg",
      logo: "public/img/log/IIT-BBS-Logo.png",
  },
{
    id: "iitbombay",
    name: "IIT Bombay ",
    city: "Mumbai",
    state: "Maharashtra ",
    image: "public/img/clg/IIT-Bombay.jpg",
    logo: "img/log/IIT-Bombay-Logo.jpg",
  },
  {
    id: "IIT Mandi",
    name: "IIT Mandi",
    city: "Mandi",
    state: "Himachal Pradesh",
    image: "public/img/clg/IIT-Mandi.jpg",
    logo: "public/img/log/IIT-MANDI-LOGO.jpg",
  },
  {
    id: "IIT Delhii",
    name: "IIT Delhi",
    city: "New Delhi",
    state: "Delhi",
    image: "public/img/clg/IIT-Delhi.jpg",
    logo: "public/img/log/IIT-Delhi-Logo.jpg",
  },
  {
    id: "IIT Indore",
    name: "IIT Indore",
    city: "Indore",
    state: "Madhya Pradesh",
    image: "public/img/clg/IIT-Indore.jpg",
    logo: "public/img/log/IIT-Indore-Logo.jpg",
  },
  {
    id: "IIT Kharagpur ",
    name: "IIT Kharagpur ",
    city: "Kharagpur",
    state: "West Bengal ",
    image: "public/img/clg/IIT-Kharagpur.jpg",
    logo: "public/img/log/IIT-Kharagpur-Logo.jpg",
  },{
    id: "IIT Hyderabad",
    name: "IIT Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    image: "public/img/clg/IIT-Hyderabad.jpg",
    logo: "public/img/log/IIT-HYDERABAD-LOGO.jpg",
  },
  {
    id: "IIT Jodhpur ",
    name: "IIT Jodhpur ",
    city: " Jodhpur ",
    state: "Rajasthan",
    image: "public/img/clg/IIT-JODHPUR.jpg",
    logo: "public/img/log/IIT-Jodhpur-Logo.jpg",
  },

  {
    id: "IIT Kanpur",
    name: "IIT Kanpur",
    city: "Kanpur",
    state: " Uttar Pradesh ",
    image: "public/img/clg/IIT-Kanpur.jpg",
    logo: "public/img/log/IIT-Kanpur-Logo.jpg",
  },
  {
    id: "IIT Madras",
    name: "IIT Madras ",
    city: "Chennai",
    state: " Tamil Nadu",
    image: "public/img/clg/IIT-Madras.jpg",
    logo: "public/img/log/IIT-Madras-Logo.jpg",
  },
  {
    id: "IIT Gandhinagar",
    name: "IIT Gandhinagar",
    city: "Gandhinagar",
    state: "Gujarat",
    image: "public/img/clg/IIT-GN.jpg",
    logo: "public/img/log/IIT-Gandhinagar-Logo.jpg",
  },
  {
    id: "IIT Patna",
    name: "IIT Patna ",
    city: "Patna ",
    state: "Bihar",
    image: "public/img/clg/IIT-Patna.jpg",
    logo: "public/img/log/IIT-Patna-Logo.jpg",
  },
  {
    id: "IIT Roorkee",
    name: "IIT Roorkee ",
    city: "Roorkee",
    state: "Uttarakhand ",
    image: "public/img/clg/IIT-Roorkee.jpg",
    logo: "public/img/log/IIT-Roorkee-Logo.jpg",
  },

  {
    id: "IIT (ISM) Dhanbad ",
    name: "IIT (ISM) Dhanbad ",
    city: " Dhanbad ",
    state: " Jharkhand ",
    image: "public/img/clg/ISM-Dhanbad.jpg",
    logo: "public/img/log/IITISM-Logo.jpg",
  },

{
  id: "iit_ropar",
  name: "IIT Ropar",
  city: "Ropar",
  state: "Punjab",
  image: "public/img/clg/IIT-Ropar.jpg",
  logo: "public/img/log/IIT-Ropar-Logo.jpg",
},
{
  id: "iit_bhu_varanasi",
  name: "IIT (BHU) Varanasi",
  city: "Varanasi",
  state: "Uttar Pradesh",
  image: "public/img/clg/IIT-BHU.jpg",
  logo: "public/img/log/IIT-BHU-Logo.jpg",
},
{
  id: "iit_guwahati",
  name: "IIT Guwahati",
  city: "Guwahati",
  state: "Assam",
  image: "public/img/clg/IIT-Guwahati.jpg",
  logo: "public/img/log/IIT-Guwahati-Logo.jpg",
},
{
  id: "iit_bhilai",
  name: "IIT Bhilai",
  city: "Bhilai",
  state: "Chhattisgarh",
  image: "public/img/clg/IIT-Bhilai.jpg",
  logo: "public/img/log/IIT-Bhilai-Logo.jpg",
},
{
  id: "iit_goa",
  name: "IIT Goa",
  city: "Ponda",
  state: "Goa",
  image: "public/img/clg/IIT-Goa-Transit-Campus.jpg",
  logo: "public/img/log/IIT-Goa-Logo.jpg",
},
{
  id: "iit_palakkad",
  name: "IIT Palakkad",
  city: "Palakkad",
  state: "Kerala",
  image: "public/img/clg/IIT-Palakkad.jpg",
  logo: "public/img/log/IIT-Palakkad-Logo.jpg",
},
{
  id: "iit_tirupati",
  name: "IIT Tirupati",
  city: "Tirupati",
  state: "Andhra Pradesh",
  image: "public/img/clg/IIT-Tirupati.jpg",
  logo: "public/img/log/IIT-Tirupati-Logo.jpg",
},
{
  id: "iit_jammu",
  name: "IIT Jammu",
  city: "Jammu",
  state: "Jammu and Kashmir",
  image: "public/img/clg/IIT-Jammu.jpg",
  logo: "public/img/log/IIT-Jammu-Logo.jpg",
},
{
  id: "iit_dharwad",
  name: "IIT Dharwad",
  city: "Dharwad",
  state: "Karnataka",
  image: "public/img/clg/IIT-Dharwad.jpg",
  logo: "public/img/log/IIT-Dharwad-Logo.jpg",
},
{
  id: "nit_jalandhar",
  name: "NIT Jalandhar",
  city: "Jalandhar",
  state: "Punjab",
  image: "public/img/clg/NIT-JALANDHAR.jpg",
  logo: "public/img/log/NIT-Jalandhar-Logo.jpg",
},
{
  id: "nit_jaipur",
  name: "NIT Jaipur",
  city: "Jaipur",
  state: "Rajasthan",
  image: "public/img/clg/MNIT-Jaipur.jpg",
  logo: "public/img/log/MNIT-Jaipur-Logo.jpg",
},
{
  id: "nit_bhopal",
  name: "NIT Bhopal",
  city: "Bhopal",
  state: "Madhya Pradesh",
  image: "public/img/clg/MANIT-BHOPAL.jpg",
  logo: "public/img/log/MANIT-Logo.jpg",
},
{
  id: "nit_allahabad",
  name: "NIT Allahabad",
  city: "Allahabad",
  state: "Uttar Pradesh",
  image: "public/img/clg/MNNIT-Allahabad.jpg",
  logo: "public/img/log/MNNIT-Allahabad-Logo.jpg",
},
{
  id: "nit_agartala",
  name: "NIT Agartala",
  city: "Agartala",
  state: "Tripura",
  image: "public/img/clg/NIT-Agartala.jpg",
  logo: "public/img/log/NIT-Agartala-Logo.jpg",
},
{
  id: "nit_calicut",
  name: "NIT Calicut",
  city: "Calicut",
  state: "Kerala",
  image: "public/img/clg/NIT-Calicut.jpg",
  logo: "public/img/log/NIT-Calicut-Logo.jpg",
},



{
  id: "nit_delhi",
  name: "NIT Delhi",
  city: "New Delhi",
  state: "Delhi",
  image: "public/img/clg/NIT-Delhi.jpg",
  logo: "public/img/log/NIT-Delhi-Logo.jpg",
},
{
  id: "nit_durgapur",
  name: "NIT Durgapur",
  city: "Durgapur",
  state: "West Bengal",
  image: "public/img/clg/NIT-Durgapur.jpg",
  logo: "public/img/log/NIT-Durgapur-Logo.jpg",
},
{
  id: "nit_goa",
  name: "NIT Goa",
  city: "Ponda",
  state: "Goa",
  image: "public/img/clg/NIT-GOA.jpg",
  logo: "public/img/log/NIT-Goa-Logo.jpg",
},
{
  id: "nit_hamirpur",
  name: "NIT Hamirpur",
  city: "Hamirpur",
  state: "Himachal Pradesh",
  image: "public/img/clg/NIT-Hamirpur.jpg",
  logo: "public/img/log/NIT-Hamirpur-Logo.jpg",
},
{
  id: "nit_surathkal",
  name: "NIT Surathkal",
  city: "Mangalore",
  state: "Karnataka",
  image: "public/img/clg/NIT-Karnataka.jpg",
  logo: "public/img/log/NIT-SURATHKAL-LOGO.jpg",
},
{
  id: "nit_meghalaya",
  name: "NIT Meghalaya",
  city: "Shillong",
  state: "Meghalaya",
  image: "public/img/clg/NIT-Meghalaya.jpg",
  logo: "public/img/log/NIT-Meghalaya-Logo.jpg",
},
{
  id: "nit_nagaland",
  name: "NIT Nagaland",
  city: "Dimapur",
  state: "Nagaland",
  image: "public/img/clg/NIT-Nagaland.jpg",
  logo: "public/img/log/NIT-NAGALAND-LOGO.jpg",
},
{
  id: "nit_patna",
  name: "NIT Patna",
  city: "Patna",
  state: "Bihar",
  image: "public/img/clg/NIT-Patna.jpg",
  logo: "public/img/log/NITP-Logo.jpg",
},
{
  id: "nit_puducherry",
  name: "NIT Puducherry",
  city: "Karaikal",
  state: "Puducherry",
  image: "public/img/clg/NIT-Puducherry.jpg",
  logo: "public/img/log/NIT-Puducherry-Logo.jpg",
},
{
  id: "nit_raipur",
  name: "NIT Raipur",
  city: "Raipur",
  state: "Chhattisgarh",
  image: "public/img/clg/NIT-RAIPUR.jpg",
  logo: "public/img/log/NIT-Raipur-Logo.jpg",
},
{
  id: "nit_sikkim",
  name: "NIT Sikkim",
  city: "Ravangla",
  state: "Sikkim",
  image: "public/img/clg/NIT-SIKKIM1.jpg",
  logo: "public/img/log/NIT-Sikkim-Logo.jpg",
},
{
  id: "nit_arunachal_pradesh",
  name: "NIT Arunachal Pradesh",
  city: "Papum Pare",
  state: "Arunachal Pradesh",
  image: "public/img/clg/NIT-Arunachal-Pradesh.jpg",
  logo: "public/img/log/NIT-Arunachal-Pradesh-logo1.jpg",
},
{
  id: "nit_jamshedpur",
  name: "NIT Jamshedpur",
  city: "Jamshedpur",
  state: "Jharkhand",
  image: "public/img/clg/NIT-Jamshedpur.jpg",
  logo: "public/img/log/NIT-Jamshedpur-logo.jpg",
},
{
  id: "nit_kurukshetra",
  name: "NIT Kurukshetra",
  city: "Kurukshetra",
  state: "Haryana",
  image: "public/img/clg/NIT-Kurukshetra.jpg",
  logo: "public/img/log/NIT-Kurukshetra-Logo.jpg",
},
{
  id: "nit_manipur",
  name: "NIT Manipur",
  city: "Imphal",
  state: "Manipur",
  image: "public/img/clg/NIT-MANIPUR.jpg",
  logo: "public/img/log/NIT-Manipur-Logo.jpg",
},
{
  id: "nit_mizoram",
  name: "NIT Mizoram",
  city: "Aizawl",
  state: "Mizoram",
  image: "public/img/clg/NIT-Mizoram.jpg",
  logo: "public/img/log/NIT-Mizoram-Logo.jpg",
},
{
  id: "nit_rourkela",
  name: "NIT Rourkela",
  city: "Rourkela",
  state: "Odisha",
  image: "public/img/clg/NIT-ROURKELA.jpg",
  logo: "public/img/log/NIT-ROURKELA-LOGO.jpg",
},
{
  id: "nit_silchar",
  name: "NIT Silchar",
  city: "Silchar",
  state: "Assam",
  image: "public/img/clg/NIT-Silchar.jpg",
  logo: "public/img/log/NIT-Silchar-Logo.jpg",
},
{
  id: "nit_srinagar",
  name: "NIT Srinagar",
  city: "Srinagar",
  state: "Jammu and Kashmir",
  image: "public/img/clg/NIT-SRINAGAR.jpg",
  logo: "public/img/log/NIT-Srinagar-Logo.jpg",
},
{
  id: "nit_trichy",
  name: "NIT Trichy",
  city: "Tiruchirappalli",
  state: "Tamil Nadu",
  image: "public/img/clg/NIT-Trichy.jpg",
  logo: "public/img/log/NITT-Logo.jpg",
},
{
  id: "nit_uttarakhand",
  name: "NIT Uttarakhand",
  city: "Garhwal",
  state: "Uttarakhand",
  image: "public/img/clg/NIT-UTTARAKHAND.jpg",
  logo: "public/img/log/NIT-Uttarakhand-Logo.jpg",
},
{
  id: "nit_warangal",
  name: "NIT Warangal",
  city: "Warangal",
  state: "Telangana",
  image: "public/img/clg/NIT-WARANGAL.jpg",
  logo: "public/img/log/NIT-Warangal-Logo.jpg",
},
{
  id: "nit_surat",
  name: "NIT Surat",
  city: "Surat",
  state: "Gujarat",
  image: "public/img/clg/NIT-Patna.jpg",
  logo: "public/img/log/SVNIT-Surat-Logo.jpg",
},

  {
    id: "nit_nagpur",
    name: "NIT Nagpur",
    city: "Nagpur",
    state: "Maharashtra",
    image: "public/img/clg/VNIT.jpg",
    logo: "public/img/log/VNIT-Nagpur-Logo.jpg"
  },
  {
    id: "nit_andhra_pradesh",
    name: "NIT Andhra Pradesh",
    city: "Tadepalligudem",
    state: "Andhra Pradesh",
    image: "public/img/clg/NIT-Andhra-Pradesh.jpg",
    logo: "public/img/log/NIT-Andhra-Pradesh-Logo.jpg"
  },
  {
    id: "abv_iiitm_gwalior",
    name: "ABV-IIITM Gwalior",
    city: "Gwalior",
    state: "Madhya Pradesh",
    image: "public/img/clg/IIITM-Gwalior.jpg",
    logo: "public/img/log/IIITM-Gwalior-Logo-e140674197982.jpg"
  },
  {
    id: "iiit_kota",
    name: "IIIT Kota",
    city: "Kota",
    state: "Rajasthan",
    image: "public/img/clg/IIIT-Kota.jpg",
    logo: "public/img/log/IIIT-Kota-Logo.jpg"
  },
  {
    id: "iiit_guwahati",
    name: "IIIT Guwahati",
    city: "Guwahati",
    state: "Assam",
    image: "public/img/clg/IIIT-Guwahati.jpg",
    logo: "public/img/log/IIIT-Guwahati-Logo.jpg"
  },
  {
    id: "iiit_kalyani",
    name: "IIIT Kalyani",
    city: "Kalyani",
    state: "West Bengal",
    image: "public/img/clg/IIIT-Kalyani.jpg",
    logo: "public/img/log/IIIT-Kalyani-logo.jpg"
  },
  {
    id: "iiit_sonepat",
    name: "IIIT Sonepat",
    city: "Sonepat",
    state: "Haryana",
    image: "public/img/clg/IIIT-Sonepat.jpg",
    logo: "public/img/log/IIIT-Sonepat-Logo.jpg"
  },
  {
    id: "iiit_una",
    name: "IIIT Una",
    city: "Una",
    state: "Himachal Pradesh",
    image: "public/img/clg/IIIT-Una.jpg",
    logo: "public/img/log/IIIT-Una-Logo.jpg"
  },
  {
    id: "iiit_sri_city",
    name: "IIIT Sri City",
    city: "Sri City",
    state: "Andhra Pradesh",
    image: "public/img/clg/IIIT-Sri-City.jpg",
    logo: "public/img/log/IIIT-Chittoor-Logo.jpg"
  },
  {
    id: "iiit_vadodara",
    name: "IIIT Vadodara",
    city: "Vadodara",
    state: "Gujarat",
    image: "public/img/clg/IIIT-Vadodara.jpg",
    logo: "public/img/log/IIIT-Vadodara-Logo.jpg"
  },
  {
    id: "iiit_allahabad",
    name: "IIIT Allahabad",
    city: "Allahabad",
    state: "Uttar Pradesh",
    image: "public/img/clg/IIIT-Allahabad.jpg",
    logo: "public/img/log/IIIT-Allahabad-Logo.jpg"
  },
  {
    id: "iiitdm_kancheepuram",
    name: "IIITDM Kancheepuram",
    city: "Chennai",
    state: "Tamil Nadu",
    image: "public/img/clg/IIITDM.jpg",
    logo: "public/img/log/IIITDM-Kancheepuram-Logo.jpg"
  },
  {
    id: "iiitdm_jabalpur",
    name: "IIITDM Jabalpur",
    city: "Jabalpur",
    state: "Madhya Pradesh",
    image: "public/img/clg/IIITDM-Jabalpur.jpg",
    logo: "public/img/log/IIITDM-Jabalpur-Logo.jpg"
  },
 
  {
    id: "iiit_manipur",
    name: "IIIT Manipur",
    city: "Imphal",
    state: "Manipur",
    image: "public/img/clg/IIIT-Manipur-Transit-Campus.jpg",
    logo: "public/img/log/IIIT-Manipur-Logo.jpg"
  },
  {
    id: "iiit_trichy",
    name: "IIIT Trichy",
    city: "Tiruchirappalli",
    state: "Tamil Nadu",
    image: "public/img/clg/IIIT-Trichy.jpg",
    logo: "public/img/log/IIIT-Srirangam-Logo.jpg"
  },
  {
    id: "iiit_lucknow",
    name: "IIIT Lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    image: "public/img/clg/IIIT-Lucknow.jpg",
    logo: "public/img/log/IIIT-Lucknow-Logo.jpg"
  },
  {
    id: "iiit_dharwad",
    name: "IIIT Dharwad",
    city: "Dharwad",
    state: "Karnataka",
    image: "public/img/clg/IIIT-Dharwad.jpg",
    logo: "public/img/log/IIIT-Dharwad-Logo.jpg"
  },
  {
    id: "iiitdm_kurnool",
    name: "IIITDM Kurnool",
    city: "Kurnool",
    state: "Andhra Pradesh",
    image: "public/img/clg/IIITDM-Kurnool.jpg",
    logo: "public/img/log/IIITDM-Kurnool-Logo.jpg"
  },
  {
    id: "iiit_kottayam",
    name: "IIIT Kottayam",
    city: "Kottayam",
    state: "Kerala",
    image: "public/img/clg/IIIT-Kottayam.jpg",
    logo: "public/img/log/IIIT-Raichur-Logo.jpg"
  },
  {
    id: "iiit_ranchi",
    name: "IIIT Ranchi",
    city: "Ranchi",
    state: "Jharkhand",
    image: "public/img/clg/IIIT-Ranchi.jpg",
    logo: "public/img/log/IIIT-Ranchi-Logo.jpg"
  },
  {
    id: "iiit_nagpur",
    name: "IIIT Nagpur",
    city: "Nagpur",
    state: "Maharashtra",
    image: "public/img/clg/IIIT-Nagpur.jpg",
    logo: "public/img/log/IIIT-Nagpur-Logo.jpg"
  },

  {
    id: "iiit_pune",
    name: "IIIT Pune",
    city: "Pune",
    state: "Maharashtra",
    image: "public/img/clg/IIIT-Pune.jpg",
    logo: "public/img/log/IIIT-Pune-Logo.jpg"
  },
  {
    id: "tssot_silchar",
    name: "TSSOT Silchar",
    city: "Silchar",
    state: "Assam",
    image: "public/img/clg/Assam-University.jpg",
    logo: "public/img/log/Assam-University-Logo.jpg"
  },
  {
    id: "bit_mesra",
    name: "BIT Mesra",
    city: "Ranchi",
    state: "Jharkhand",
    image: "public/img/clg/BIT-Mesra.jpg",
    logo: "public/img/log/BIT-Mesra-Logo.jpg"
  },
  {
    id: "gkv_haridwar",
    name: "GKV Haridwar",
    city: "Haridwar",
    state: "Uttarakhand",
    image: "public/img/clg/GKV-Haridwar.jpg",
    logo: "public/img/log/GKV-Haridwar-Logo.jpg"
  },
  {
    id: "iiest_shibpur",
    name: "IIEST Shibpur",
    city: "Shibpur",
    state: "West Bengal",
    image: "public/img/clg/IIEST-Shibpur.jpg",
    logo: "public/img/log/IIEST-Shibpur-Logo.jpg"
  },
  {
    id: "iitram_ahmedabad",
    name: "IITRAM Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    image: "public/img/clg/IITRAM-Ahmedabad.jpg",
    logo: "public/img/log/IITRAM-Ahmedabad-Logo.jpg"
  },
  {
    id: "jkiapt_allahabad",
    name: "JKIAPT Allahabad",
    city: "Allahabad",
    state: "Uttar Pradesh",
    image: "public/img/clg/JKIAPT-Allahabad.jpg",
    logo: "public/img/log/JKIAPT-Allahabad-Logo.jpg"
  },
  {
    id: "bits_pilani",
    name: "BITS Pilani",
    city: "Pilani",
    state: "Rajasthan",
    image: "public/img/clg/BITS-Pilani.jpg",
    logo: "public/img/log/BITS-Pilani-Logo.jpg"
  },
  {
    id: "bits_goa",
    name: "BITS Goa",
    city: "Zuarinagar",
    state: "Goa",
    image: "public/img/clg/BITS-Goa.jpg",
    logo: "public/img/log/BITS-Pilani-Logo (1).jpg"
  },
  {
    id: "bits_hyderabad",
    name: "BITS Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    image: "public/img/clg/BITS-Hyderabad.jpg",
    logo: "public/img/log/BITS-Pilani-Logo (1).jpg"
  },
{
    id: "nsut_delhi",
    name: "NSUT Delhi",
    city: "New Delhi",
    state: "Delhi",
    image: "public/img/clg/NSIT.jpg",
    logo: "public/img/log/NSUT-Delhi-Logo (1).jpg"
  },
  {
    id: "dtu_delhi",
    name: "DTU Delhi",
    city: "New Delhi",
    state: "Delhi",
    image: "public/img/clg/Delhi-Technological-University.jpg",
    logo: "public/img/log/DTU-Logo.jpg"
  },
  {
    id: "igdtuw_delhi",
    name: "IGDTUW Delhi",
    city: "New Delhi",
    state: "Delhi",
    image: "public/img/clg/IGDTUW.jpg",
    logo: "public/img/log/IGDTUW-Logo.jpg"
  },
  {
    id: "iiit_delhi",
    name: "IIIT Delhi",
    city: "New Delhi",
    state: "Delhi",
    image: "public/img/clg/IIIT-Delhi.jpg",
    logo: "public/img/log/IIITD-Logo.jpg"
  },
  {
    id: "daiict_gandhinagar",
    name: "DAIICT Gandhinagar",
    city: "Gandhinagar",
    state: "Gujarat",
    image: "public/img/clg/DAIICT.jpg",
    logo: "public/img/log/DAIICT-Logo.jpg"
  },
  {
    id: "tiet_patiala",
    name: "TIET Patiala",
    city: "Patiala",
    state: "Punjab",
    image: "public/img/clg/Thapar-University.jpg",
    logo: "public/img/log/TIET-Patiala-Logo.jpg"
  },
  {
    id: "iiit_hyderabad",
    name: "IIIT Hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    image: "public/img/clg/IIIT-Hyderbad.jpg",
    logo: "public/img/log/IIIT-Hyderabad-Logo.jpg"
  },
  {
    id: "iiit_bangalore",
    name: "IIIT Bangalore",
    city: "Bangalore",
    state: "Karnataka",
    image: "public/img/clg/IIIT-Bangalore.jpg",
    logo: "public/img/log/IIIT-Bangalore-Logo.jpg"
  },
  {
    id: "lnmiit_jaipur",
    name: "LNMIIT Jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    image: "public/img/clg/LNMIIT.jpg",
    logo: "public/img/log/LNMIIT_Logo.jpg"
  },


  {
    id: "iisc_bangalore",
    name: "IISc Bangalore",
    city: "Bangalore",
    state: "Karnataka",
    image: "public/img/clg/IISc.jpg",
    logo: "public/img/log/IIsc-Logo.jpg"
  },

{
    id: "jiit_noida_sec62",
    name: "JIIT Noida (Sec-62)",
    city: "Noida",
    state: "Uttar Pradesh",
    image: "public/img/clg/JIIT-Noida.jpg",
    logo: "public/img/log/JIIT-Noida-Logo.jpg"
  },
  {
    id: "jiit_noida_sec128",
    name: "JIIT Noida (Sec-128)",
    city: "Noida",
    state: "Uttar Pradesh",
    image: "public/img/clg/JIIT-Noida-Sector-128.jpg",
    logo: "public/img/log/JIIT-Noida-Logo (1).jpg"
  },
  {
    id: "vit_vellore",
    name: "VIT Vellore",
    city: "Vellore",
    state: "Tamil Nadu",
    image: "public/img/clg/VIT-Vellore.jpg",
    logo: "public/img/log/Vellore-Institute-of-Technology (1).jpg"
  },
  {
    id: "vit_chennai",
    name: "VIT Chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    image: "public/img/clg/VIT-Chennai.jpg",
    logo: "public/img/log/Vellore-Institute-of-Technology.jpg"
  },
  {
    id: "jmi_delhi",
    name: "JMI Delhi",
    city: "New Delhi",
    state: "Delhi",
    image: "public/img/clg/Jamia-Millia-Islamia.jpg",
    logo: "public/img/log/Jamia-Millia-Islamia-Logo.jpg"
  },
  {
    id: "iist_thiruvananthapuram",
    name: "IIST Thiruvananthapuram",
    city: "Thiruvananthapuram",
    state: "Kerala",
    image: "public/img/clg/IIST-Thiruvananthapuram.jpg",
    logo: "public/img/log/IIST-Logo.jpg"
  },
  {
    id: "itnu_ahmedabad",
    name: "ITNU Ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    image: "public/img/clg/ITNU-Ahmedabad.jpg",
    logo: "public/img/log/Nirma-University-logo.jpg"
  },
  {
    id: "zhcet_amu_aligarh",
    name: "ZHCET AMU Aligarh",
    city: "Aligarh",
    state: "Uttar Pradesh",
    image: "public/img/clg/ZHCET-Aligarh.jpg",
    logo: "public/img/log/AMU-Logo.jpg"
  },
  {
    id: "iiser_pune",
    name: "IISER Pune",
    city: "Pune",
    state: "Maharashtra",
    image: "public/img/clg/IISER-Pune.jpg",
    logo: "public/img/log/IISER-Pune.jpg"
  },
  {
    id: "iiser_mohali",
    name: "IISER Mohali",
    city: "Mohali",
    state: "Punjab",
    image: "public/img/clg/IISER-Mohali.jpg",
    logo: "public/img/log/IISER-Mohali-Logo.jpg"
  },
  {
    id: "iiser_bhopal",
    name: "IISER Bhopal",
    city: "Bhopal",
    state: "Madhya Pradesh",
    image: "public/img/clg/IISER-Bhopal.jpg",
    logo: "public/img/log/IISER-Bhopal-Logo.jpg"
  },

{
    id: "iiser_kolkata",
    name: "IISER Kolkata",
    city: "Kolkata",
    state: "West Bengal",
    image: "public/img/clg/IISER-Kolkata.jpg",
    logo: "public/img/log/IISER-Kolkata-Logo.jpg"
  },
  {
    id: "iiser_thiruvananthapuram",
    name: "IISER Thiruvananthapuram",
    city: "Thiruvananthapuram",
    state: "Kerala",
    image: "public/img/clg/IISER-Thiruvananthapuram.jpg",
    logo: "public/img/log/IISER-TVM-Logo.jpg"
  },
  {
    id: "iiser_tirupati",
    name: "IISER Tirupati",
    city: "Tirupati",
    state: "Andhra Pradesh",
    image: "public/img/clg/IISER-Tirupati.jpg",
    logo: "public/img/log/IISER-Tirupati-Logo.jpg"
  },
  {
    id: "iiser_berhampur",
    name: "IISER Berhampur",
    city: "Berhampur",
    state: "Odisha",
    image: "public/img/clg/IISER-Berhampur.jpg",
    logo: "public/img/log/IISER-Berhampur-Logo.jpg"
  },
  {
    id: "upes_dehradun",
    name: "UPES Dehradun",
    city: "Dehradun",
    state: "Uttarakhand",
    image: "public/img/clg/UPES-Dehradun.jpg",
    logo: "public/img/log/UPES-Dehradun-Logo.jpg"
  },

  {
    id: "niser_bhubaneswar",
    name: "NISER Bhubaneswar",
    city: "Bhubaneswar",
    state: "Odisha",
    image: "public/img/clg/NISER-Bhubaneswar.jpg",
    logo: "public/img/log/NISER-Bhubaneswar-Logo.jpg"
  },
  {
    id: "iiit_bhubaneswar",
    name: "IIIT Bhubaneswar",
    city: "Bhubaneswar",
    state: "Odisha",
    image: "public/img/clg/IIIT-Bhubaneswar.jpg",
    logo: "public/img/log/IIIT_Bhubaneswar_Logo.jpg"
  },

{ 
  id: "hbtu_kanpur", 
  name: "HBTU Kanpur", 
  city: "Kanpur", 
  state: "Uttar Pradesh", 
  image: "public/img/clg/HBTI-Kanpur.jpg", 
  logo: "public/img/log/HBTU-Kanpur-Logo.jpg" 
}, 
{ 
  id: "jadavpur_university", 
  name: "Jadavpur University", 
  city: "Kolkata", 
  state: "West Bengal", 
  image: "public/img/clg/Jadavpur-University.jpg", 
  logo: "public/img/log/Jadavpur-University-Logo.jpg" 
}, 
{ 
  id: "iet_lucknow", 
  name: "IET Lucknow", 
  city: "Lucknow", 
  state: "Uttar Pradesh", 
  image: "public/img/clg/IET-Lucknow-660x330.jpg", 
  logo: "public/img/log/IET-Lucknow-Logo.jpg" 
}, 
{ 
  id: "pec_chandigarh", 
  name: "PEC Chandigarh", 
  city: "Chandigarh", 
  state: "Chandigarh", 
  image: "public/img/clg/PEC-Chandigarh.jpg", 
  logo: "public/img/log/PEC-Logo.jpg" 
}, 
{ 
  id: "uiet_chandigarh", 
  name: "UIET Chandigarh", 
  city: "Chandigarh", 
  state: "Chandigarh", 
  image: "public/img/clg/UIET-Chandigarh.jpg", 
  logo: "public/img/log/UIET-Chandigarh-Logo.jpg" 
}, 
{ 
  id: "cusat_kochi", 
  name: "CUSAT Kochi", 
  city: "Cochin", 
  state: "Kerala", 
  image: "public/img/clg/CSIR-CECRI-Karaikudi.jpg", 
  logo: "public/img/log/CUSAT-Logo.jpg" 
}, 
{ 
  id: "mit_manipal", 
  name: "MIT Manipal", 
  city: "Manipal", 
  state: "Karnataka", 
  image: "public/img/clg/MIT-Manipal.jpg", 
  logo: "public/img/log/MIT-WPU-Logo.jpg" 
}, 
{ 
  id: "jntuhce_hyderabad", 
  name: "JNTUHCE Hyderabad", 
  city: "Hyderabad", 
  state: "Telangana", 
  image: "public/img/clg/JNTU-COE-Hyderabad.jpg", 
  logo: "public/img/log/JNTUH-Logo.jpg" 
}, 
{ 
  id: "coeptech_pune", 
  name: "COEP Tech Pune", 
  city: "Pune", 
  state: "Maharashtra", 
  image: "public/img/clg/COEP-Pune.jpg", 
  logo: "public/img/clg/COEP-Pune.jpg" 
}, 
{ 
  id: "vjti_mumbai", 
  name: "VJTI Mumbai", 
  city: "Mumbai", 
  state: "Maharashtra", 
  image: "public/img/clg/VJTI.jpg", 
  logo: "public/img/log/VJTI-Mumbai-Logo.jpg" 
}, 
{ 
  id: "vitap_university", 
  name: "VIT-AP University", 
  city: "Amaravati", 
  state: "Andhra Pradesh", 
  image: "public/img/clg/VIT-AP-campus.jpg", 
  logo: "public/img/log/VIT-Pune-Logo.jpg" 
}, 
{ 
  id: "vit_bhopal_university", 
  name: "VIT Bhopal University", 
  city: "Bhopal", 
  state: "Madhya Pradesh", 
  image: "public/img/clg/VIT-Bhopal.jpg", 
  logo: "public/img/log/Vellore-Institute-of-Technology.jpg" 
}, 
{ 
  id: "usict_ggsipu_delhi", 
  name: "USICT GGSIPU Delhi", 
  city: "New Delhi", 
  state: "Delhi", 
  image: "public/img/clg/USICT-Delhi.jpg", 
  logo: "public/img/log/GGSIPU-Logo.jpg" 
}, 
 
{ 
  id: "mait_delhi", 
  name: "MAIT Delhi", 
  city: "New Delhi", 
  state: "Delhi", 
  image: "public/img/clg/MAIT-Delhi.jpg", 
  logo: "public/img/log/MAIT-Delhi-Logo.jpg" 
}, 
{ 
  id: "bvcoe_delhi", 
  name: "BVCOE Delhi", 
  city: "New Delhi", 
  state: "Delhi", 
  image: "public/img/clg/BVCOE-Delhi.jpg", 
  logo: "public/img/log/Bharati-Vidyapeeth-Logo.jpg" 
}, 
{ 
  id: "adgitm_delhi", 
  name: "ADGITM Delhi", 
  city: "New Delhi", 
  state: "Delhi", 
  image: "public/img/clg/Assam-University.jpg", 
  logo: "public/img/log/Assam-University-Logo.jpg" 
}, 
{ 
  id: "gtbit_delhi", 
  name: "GTBIT Delhi", 
  city: "New Delhi", 
  state: "Delhi", 
  image: "public/img/clg/GTBIT-Delhi.jpg", 
  logo: "public/img/log/GTBIT-Logo.jpg" 
}, 
{ 
  id: "msit_delhi", 
  name: "MSIT Delhi", 
  city: "New Delhi", 
  state: "Delhi", 
  image: "public/img/clg/MSIT-Delhi.jpg", 
  logo: "public/img/log/MSIT-Logo.jpg" 
}, 
{ 
  id: "bpit_delhi", 
  name: "BPIT Delhi", 
  city: "New Delhi", 
  state: "Delhi", 
  image: "public/img/clg/BPIT-Delhi.jpg", 
  logo: "public/img/log/BPIT-Delhi-Logo.jpg" 
}, 
{ 
  id: "rvce_bangalore", 
  name: "RVCE Bangalore", 
  city: "Bangalore", 
  state: "Karnataka", 
  image: "public/img/clg/RVCE.jpg", 
  logo: "public/img/log/RVCE-Logo.jpg" 
}, 
{ 
  id: "bmsce_bangalore", 
  name: "BMSCE Bangalore", 
  city: "Bangalore", 
  state: "Karnataka", 
  image: "public/img/clg/BMSCE-Bangalore.jpg", 
  logo: "public/img/log/BMSCE-Logo.jpg" 
}, 
{ 
  id: "rit_bangalore", 
  name: "RIT Bangalore", 
  city: "Bangalore", 
  state: "Karnataka", 
  image: "public/img/clg/RIT-Kottayam.jpg", 
  logo: "public/img/log/RIT-Bangalore-Logo.jpg" 
}, 
{ 
  id: "pesu_ringroad_bangalore", 
  name: "PESU Ring Road Campus", 
  city: "Bangalore", 
  state: "Karnataka", 
  image: "public/img/clg/PESU-Bangalore.jpg", 
  logo: "/public/img/log/PES-University-Logo.jpg" 
}, 
{ 
  id: "pesu_ec_bangalore", 
  name: "PESU Electronic City Bangalore", 
  city: "Bangalore", 
  state: "Karnataka", 
  image: "public/img/clg/PESIT-BCS.jpg", 
  logo: "public/img/log/PEC-Logo.jpg" 
}, 
 
{ 
  id: "bmsitm_bangalore", 
  name: "BMSIT&M Bangalore", 
  city: "Bangalore", 
  state: "Karnataka", 
  image: "public/img/clg/BMSIT-Bangalore.jpg", 
  logo: "public/img/log/BMSITM-Bangalore-Logo.jpg" 
}, 
{ 
  id: "uvce_bangalore", 
  name: "UVCE Bangalore", 
  city: "Bangalore", 
  state: "Karnataka", 
  image: "public/img/clg/UVCE-Bangalore.jpg", 
  logo: "public/img/log/UCE-Hyderabad-Logo.jpg" 
}, 
{ 
  id: "sir_mvit_bangalore", 
  name: "Sir MVIT Bangalore", 
  city: "Bangalore", 
  state: "Karnataka", 
  image: "public/img/clg/Sir-MVIT.jpg", 
  logo: "public/img/log/Sir-MVIT-Logo.jpg" 
}, 
{ 
  id: "mvjce_bangalore", 
  name: "MVJCE Bangalore", 
  city: "Bangalore", 
  state: "Karnataka", 
  image: "public/img/clg/MVJCE-Bangalore.jpg", 
  logo: "public/img/log/MVJCE-Bangalore-Logo.jpg" 
}, 
{ 
  id: "nie_mysore", 
  name: "NIE Mysore", 
  city: "Mysore", 
  state: "Karnataka", 
  image: "public/img/clg/NIE-Mysore.jpg", 
  logo: "public/img/log/NIE-Mysore-Logo.jpg" 
}, 
{ 
  id: "kgec_kalyani", 
  name: "KGEC Kalyani", 
  city: "Kalyani", 
  state: "West Bengal", 
  image: "public/img/clg/KGEC-Kalyani.jpg", 
  logo: "public/img/log/KGEC-Kalyani-Logo.jpg" 
}, 
{ 
  id: "pict_pune", 
  name: "PICT Pune", 
  city: "Pune", 
  state: "Maharashtra", 
  image: "public/img/clg/PICT-Pune.jpg", 
  logo: "public/img/log/PICT-Logo.jpg" 
}, 
{ 
  id: "jcb_ust_ymca_faridabad", 
  name: "JCB UST YMCA Faridabad", 
  city: "Faridabad", 
  state: "Haryana", 
  image: "public/img/clg/JKIAPT-Allahabad.jpg", 
  logo: "public/img/log/JCB-UST-YMCA-Faridabad-Logo.jpg" 
}, 
{ 
  id: "ait_pune", 
  name: "AIT Pune", 
  city: "Pune", 
  state: "Maharashtra", 
  image: "public/img/clg/AIT-Pune.jpg", 
  logo: "public/img/log/AIT-Pune-Logo.jpg" 
}, 
{ 
  id: "wce_sangli", 
  name: "WCE Sangli", 
  city: "Sangli", 
  state: "Maharashtra", 
  image: "public/img/clg/WCE-Sangli.jpg", 
  logo: "public/img/log/WCE-Sangli-Logo.jpg" 
}, 
 
 { 
  id: "bit_bangalore", 
  name: "BIT Bangalore", 
  city: "Bangalore", 
  state: "Karnataka", 
  image: "public/img/clg/BIT-Bangalore.jpg", 
  logo: "public/img/log/BIT-Bangalore-Logo.jpg" 
}, 
{ 
  id: "spce_mumbai", 
  name: "SPCE Mumbai", 
  city: "Mumbai", 
  state: "Maharashtra", 
  image: "public/img/clg/SPCE-Mumbai.jpg", 
  logo: "public/img/log/SPCE-Mumbai-Logo.jpg" 
}, 
{ 
  id: "djsce_mumbai", 
  name: "DJSCE Mumbai", 
  city: "Mumbai", 
  state: "Maharashtra", 
  image: "public/img/clg/DJSCE-Mumbai.jpg", 
  logo: "public/img/log/DJSCE-Mumbai-Logo.jpg" 
}, 
{ 
  id: "vit_pune", 
  name: "VIT Pune", 
  city: "Pune", 
  state: "Maharashtra", 
  image: "public/img/clg/VIT-Pune.jpg", 
  logo: "public/img/log/VIT-Pune-Logo.jpg" 
}, 
{ 
  id: "mit_wpu_pune", 
  name: "MIT-WPU Pune", 
  city: "Pune", 
  state: "Maharashtra", 
  image: "public/img/clg/MIT-Pune.jpg", 
  logo: "public/img/log/MIT-WPU-Logo.jpg" 
}, 
{ 
  id: "sgsits_indore", 
  name: "SGSITS Indore", 
  city: "Indore", 
  state: "Madhya Pradesh", 
  image: "public/img/clg/SGSITS-Indore.jpg", 
  logo: "public/img/log/SGSITS-Indore-Logo.jpg" 
}, 
{ 
  id: "iet_davv_indore", 
  name: "IET-DAVV Indore", 
  city: "Indore", 
  state: "Madhya Pradesh", 
  image: "public/img/clg/IET-DAVV-Indore.jpg", 
  logo: "public/img/log/IET-DAVV-Indore-Logo.jpg" 
}, 
{ 
  id: "iiit_bhagalpur", 
  name: "IIIT Bhagalpur", 
  city: "Bhagalpur", 
  state: "Bihar", 
  image: "public/img/clg/IIIT-Bhagalpur.jpg", 
  logo: "public/img/log/IIIT-Bhagalpur-Logo.jpg" 
}, 
{ 
  id: "iiit_bhopal", 
  name: "IIIT Bhopal", 
  city: "Bhopal", 
  state: "Madhya Pradesh", 
  image: "public/img/clg/IIIT-Bhopal.jpg", 
  logo: "public/img/log/IIIT-Bhopal-Logo.jpg" 
}, 
{ 
  id: "iiit_surat", 
  name: "IIIT Surat", 
  city: "Surat", 
  state: "Gujarat", 
  image: "public/img/clg/IIIT-Surat.jpg", 
  logo: "public/img/log/IIIT-Surat-Logo.jpg" 
}, 
 
{ 
  id: "iiit_naya_raipur", 
  name: "IIIT Naya Raipur", 
  city: "Naya Raipur", 
  state: "Chhattisgarh", 
  image: "img/clg/IIIT-Naya-Raipur.jpg", 
  logo: "public/img/log/IIIT-Raichur-Logo.jpg" 
}, 
{ 
  id: "rgipt_amethi", 
  name: "RGIPT Amethi", 
  city: "Amethi", 
  state: "Uttar Pradesh", 
  image: "public/img/clg/RGIPT-Amethi.jpg", 
  logo: "public/img/log/RGIPT-Amethi-Logo.jpg", 
}, 
{ 
  id: "cet_trivandrum", 
  name: "CET Trivandrum", 
  city: "Thiruvananthapuram", 
  state: "Kerala", 
  image: "public/img/clg/CET-Trivandrum.jpg", 
  logo: "public/img/log/CET-Trivandrum-Logo.jpg" 
}, 
{ 
  id: "ict_mumbai", 
  name: "ICT Mumbai", 
  city: "Mumbai", 
  state: "Maharashtra", 
  image: "public/img/clg/ICT-Mumbai.jpg", 
  logo: "public/img/log/ICT-Mumbai-Logo.jpg" 
}, 
{ 
  id: "iiit_agartala", 
  name: "IIIT Agartala", 
  city: "Agartala", 
  state: "Tripura", 
  image: "public/img/clg/IIIT-Agartala.jpg", 
  logo: "public/img/log/IIIT-Agartala-Logo.jpg" 
}, 
{ 
  id: "soe_jnu_delhi", 
  name: "SOE JNU Delhi", 
  city: "New Delhi", 
  state: "Delhi", 
  image: "public/img/clg/SOE-Tezpur-University.jpg", 
  logo: "public/img/log/JNU-Delhi-Logo.jpg" 
}, 
{ 
  id: "amity_noida", 
  name: "Amity Noida", 
  city: "Noida", 
  state: "Uttar Pradesh", 
  image: "public/img/clg/Amity-University-Noida.jpg", 
  logo: "public/img/log/AMU-Logo.jpg" 
}, 
{ 
  id: "nsut_delhi_east", 
  name: "NSUT Delhi East Campus", 
  city: "New Delhi", 
  state: "Delhi", 
  image: "public/img/clg/NSIT.jpg", 
  logo: "public/img/log/NSUT-Delhi-Logo.jpg" 
}, 
{ 
  id: "sjce_mysore", 
  name: "SJCE Mysore", 
  city: "Mysore", 
  state: "Karnataka", 
  image: "public/img/clg/SJCE-Mysore.jpg", 
  logo: "public/img/log/SJCE-Mysore-Logo.jpg" 
}, 
{ 
  id: "sit_tumkur", 
  name: "SIT Tumkur", 
  city: "Tumkur", 
  state: "Karnataka", 
  image: "public/img/clg/SIT-Tumkur.jpg", 
  logo: "public/img/log/SIT-Tumkur-Logo.jpg" 
}, 
 
{ 
  id: "kle_tech_university", 
  name: "KLE Tech University", 
  city: "Hubli", 
  state: "Karnataka", 
  image: "public/img/clg/KLE-Tech-University.jpg", 
  logo: "public/img/log/KLE-Tech-University-Logo.jpg" 
}, 
{ 
  id: "dsce_bangalore", 
  name: "DSCE Bangalore", 
  city: "Bangalore", 
  state: "Karnataka", 
  image: "public/img/clg/DSCE-Bangalore.jpg", 
  logo: "public/img/log/DSI-Bangalore-Logo.jpg" 
}, 
{ 
  id: "tkmce_kollam", 
  name: "TKMCE Kollam", 
  city: "Kollam", 
  state: "Kerala", 
  image: "public/img/clg/TKMCE-Kollam.jpg", 
  logo: "public/img/log/TKMCE-Kollam-Logo.jpg" 
}, 
{ 
  id: "gec_thrissur", 
  name: "GEC Thrissur", 
  city: "Thrissur", 
  state: "Kerala", 
  image: "public/img/clg/GEC-Thrissur.jpg", 
  logo: "public/img/log/GEC-Thrissur-Logo.jpg" 
}, 
{ 
  id: "mec_kochi", 
  name: "MEC Kochi", 
  city: "Cochin", 
  state: "Kerala", 
  image: "public/img/clg/MEC-Thrikkakara.jpg", 
  logo: "public/img/log/MEC-Kochi-Logo.jpg" 
}, 
{ 
  id: "spit_mumbai", 
  name: "SPIT Mumbai", 
  city: "Mumbai", 
  state: "Maharashtra", 
  image: "public/img/clg/SPIT-Mumbai.jpg", 
  logo: "public/img/log/SPIT-Mumbai-Logo.jpg" 
}, 
{ 
  id: "kjsce_mumbai", 
  name: "KJSCE Mumbai", 
  city: "Mumbai", 
  state: "Maharashtra", 
  image: "public/img/clg/KJSCE-Mumbai.jpg", 
  logo: "public/img/log/KJSCE-Somaiya-Logo.jpg" 
}, 
{ 
  id: "jec_jabalpur", 
  name: "JEC Jabalpur", 
  city: "Jabalpur", 
  state: "Madhya Pradesh", 
  image: "public/img/clg/JEC-Jabalpur.jpg", 
  logo: "public/img/log/JEC-Jabalpur-Logo.jpg" 
}, 
{ 
  id: "mits_gwalior", 
  name: "MITS Gwalior", 
  city: "Gwalior", 
  state: "Madhya Pradesh", 
  image: "public/img/clg/MITS-Gwalior.jpg", 
  logo: "public/img/log/MITS-Gwalior-Logo.jpg" 
}, 
{ 
  id: "iem_kolkata", 
  name: "IEM Kolkata", 
  city: "Kolkata", 
  state: "West Bengal", 
  image: "public/img/clg/IET-Lucknow-660x330.jpg", 
  logo: "public/img/log/IET-Lucknow-Logo.jpg" 
}, 
{ 
  id: "iipe_visakhapatnam", 
  name: "IIPE Visakhapatnam", 
  city: "Visakhapatnam", 
  state: "Andhra Pradesh", 
  image: "public/img/clg/IIPE-Vizag.jpg", 
  logo: "public/img/log/IIPE-Vizag-Logo.jpg" 
}, 
 
{ 
  id: "ssbuicet_chandigarh", 
  name: "Dr. SSB UICET Chandigarh", 
  city: "Chandigarh", 
  state: "Chandigarh", 
  image: "public/img/clg/SOE-CUSAT.jpg", 
  logo: "public/img/log/SSB-UICET-Chandigarh-Logo.jpg" 
}, 
{ 
  id: "iiit_raichur", 
  name: "IIIT Raichur", 
  city: "Raichur", 
  state: "Karnataka", 
  image: "public/img/clg/IIIT-Raichur-Transit-Campus.jpg", 
  logo: "public/img/log/IIIT-Raichur-Logo.jpg" 
}, 
{ 
  id: "ccew_pune", 
  name: "CCEW Pune", 
  city: "Pune", 
  state: "Maharashtra", 
  image: "public/img/clg/CBPGEC-Delhi.jpg", 
  logo: "public/img/log/CVRCE-Ibrahimpatnam-Logo.jpg" 
}, 
{ 
  id: "hit_kolkata", 
  name: "HIT Kolkata", 
  city: "Kolkata", 
  state: "West Bengal", 
  image: "public/img/clg/NIT-Calicut.jpg", 
  logo: "public/img/log/NIT-Calicut-Logo.jpg" 
}, 
{ 
  id: "calcutta_university", 
  name: "University of Calcutta", 
  city: "Kolkata", 
  state: "West Bengal", 
  image: "public/img/clg/University-of-Calcutta.jpg", 
  logo: "public/img/log/University-of-Calcutta-Logo.jpg" 
}, 
{ 
  id: "iiitv_icd_diu", 
  name: "IIITV-ICD Diu", 
  city: "Diu", 
  state: "Daman and Diu", 
  image: "public/img/clg/IIIT-Trichy.jpg", 
  logo: "public/img/log/IIITV-ICD-Diu-Logo.jpg" 
}, 
{ 
  id: "nsut_west_campus", 
  name: "NSUT Delhi West Campus", 
  city: "New Delhi", 
  state: "Delhi", 
  image: "public/img/clg/NIT-WARANGAL.jpg", 
  logo: "public/img/log/NSUT-Delhi-Logo.jpg" 
}, 
{ 
  id: "uceou_hyderabad", 
  name: "UCEOU Hyderabad", 
  city: "Hyderabad", 
  state: "Telangana", 
  image: "public/img/clg/UCEOU-Hyderabad.jpg", 
  logo: "public/img/log/UCE-Hyderabad-Logo.jpg" 
}, 
{ 
  id: "cbit_hyderabad", 
  name: "CBIT Hyderabad", 
  city: "Hyderabad", 
  state: "Telangana", 
  image: "public/img/clg/CBIT-Hyderabad.jpg", 
  logo: "public/img/log/CBIT-Hyderabad-Logo.jpg" 
}, 
{ 
  id: "vce_hyderabad", 
  name: "VCE Hyderabad", 
  city: "Hyderabad", 
  state: "Telangana", 
  image: "public/img/clg/VCE-Hyderabad.jpg", 
  logo: "public/img/log/VCE-Hyderabad-Logo.jpg" 
}, 
 
{ 
  id: "vnrvjiet_hyderabad", 
  name: "VNR VJIET Hyderabad", 
  city: "Hyderabad", 
  state: "Telangana", 
  image: "public/img/clg/VNR-VJIET-Hyderabad.jpg", 
  logo: "public/img/log/VNR-VJIET-Hyderabad-Logo.jpg" 
}, 











{ 
  id: "griet_hyderabad", 
  name: "GRIET Hyderabad", 
  city: "Hyderabad", 
  state: "Telangana", 
  image: "public/img/clg/GRIET-Hyderabad.jpg", 
  logo: "public/img/log/GRIET-Hyderabad-Logo.jpg" 
}, 
{ 
  id: "cvrce_ibrahimpatnam", 
  name: "CVRCE Ibrahimpatnam", 
  city: "Ibrahimpatnam", 
  state: "Telangana", 
  image: "public/img/clg/CVRCE-Ibrahimpatnam.jpg", 
  logo: "public/img/log/CVRCE-Ibrahimpatnam-Logo.jpg" 
}, 
{ 
  id: "auce_visakhapatnam", 
  name: "AUCE Visakhapatnam", 
  city: "Visakhapatnam", 
  state: "Andhra Pradesh", 
  image: "public/img/clg/AUCE-Visakhapatnam.jpg", 
  logo: "public/img/log/AUCE-Visakhapatnam-Logo.jpg" 
}, 
{ 
  id: "jntuce_kakinada", 
  name: "JNTUCE Kakinada", 
  city: "Kakinada", 
  state: "Andhra Pradesh", 
  image: "public/img/clg/JKIAPT-Allahabad.jpg", 
  logo: "public/img/log/JNTU-Kakinada-Logo.jpg" 
}, 
{ 
  id: "svuce_tirupati", 
  name: "SVUCE Tirupati", 
  city: "Tirupati", 
  state: "Andhra Pradesh", 
  image: "public/img/clg/SVU-Tirupati.jpg", 
  logo: "public/img/log/SVUCE-Tirupati-Logo.jpg" 
}, 
{ 
  id: "usar_ggsipu_delhi", 
  name: "USAR GGSIPU Delhi", 
  city: "New Delhi", 
  state: "Delhi", 
  image: "public/img/clg/USAR-Delhi-GGSIPU-East.jpg", 
  logo: "public/img/log/GGSIPU-Logo.jpg" 
}, 
{ 
  id: "bit_sindri", 
  name: "BIT Sindri", 
  city: "Dhanbad", 
  state: "Jharkhand", 
  image: "public/img/clg/BIT-Sindri.jpg", 
  logo: "public/img/log/BIT-Sindri-Logo.jpg" 
}, 
{ 
  id: "srmist_chennai", 
  name: "SRMIST Chennai", 
  city: "Chennai", 
  state: "Tamil Nadu", 
  image: "public/img/clg/SRM-University.jpg", 
  logo: "public/img/log/SRMIST-Logo.jpg" 
}, 
{ 
  id: "ase_coimbatore", 
  name: "ASE Coimbatore", 
  city: "Coimbatore", 
  state: "Tamil Nadu", 
  image: "public/img/clg/ASE-Coimbatore.jpg", 
  logo: "public/img/log/Amrita-Vishwa-Vidyapeetham-Logo.jpg" 
}, 
 
{ 
  id: "jgec_jalpaiguri", 
  name: "JGEC Jalpaiguri", 
  city: "Jalpaiguri", 
  state: "West Bengal", 
  image: "public/img/clg/JGEC-Jalpaiguri.jpg", 
  logo: "public/img/log/JGEC-Jalpaiguri-Logo.jpg" 
}, 
{ 
  id: "makaut_kolkata", 
  name: "MAKAUT Kolkata", 
  city: "Kolkata", 
  state: "West Bengal", 
  image: "public/img/clg/MAKAUT-Kolkata.jpg", 
  logo: "public/img/log/MAKAUT-Kolkata-Logo.jpg" 
}, 
{ 
  id: "mit_bengaluru", 
  name: "MIT Bengaluru", 
  city: "Bangalore", 
  state: "Karnataka", 
  image: "public/img/clg/MIT-Bengaluru.jpg", 
  logo: "public/img/log/MIT-WPU-Logo.jpg" 
}, 
{ 
  id: "uoh_hyderabad", 
  name: "UOH Hyderabad", 
  city: "Hyderabad", 
  state: "Telangana", 
  image: "public/img/clg/University-of-Calcutta.jpg", 
  logo: "public/img/log/UOH-Hyderabad-Logo.jpg" 
}, 
{ 
  id: "jssstu_mysore", 
  name: "JSSSTU Mysore", 
  city: "Mysore", 
  state: "Karnataka", 
  image: "public/img/clg/JSSSTU-Mysore.jpg", 
  logo: "public/img/log/JSSSTU-Mysore-Logo.jpg" 
}, 
{ 
  id: "ptu_puducherry", 
  name: "PTU Puducherry", 
  city: "Puducherry", 
  state: "Puducherry", 
  image: "public/img/clg/PTU-Puducherry.jpg", 
  logo: "public/img/log/PTU-Puducherry-Logo.jpg" 
}, 
{ 
  id: "cic_delhi", 
  name: "CIC Delhi", 
  city: "New Delhi", 
  state: "Delhi", 
  image: "public/img/clg/COEP-Pune.jpg", 
  logo: "public/img/log/Delhi-University-Logo.jpg" 
}, 
{ 
  id: "mace_kothamangalam", 
  name: "MACE Kothamangalam", 
  city: "Kothamangalam", 
  state: "Kerala", 
  image: "public/img/clg/MACE-Kothamangalam.jpg", 
  logo: "public/img/log/MACE-Kothamangalam-Logo.jpg" 
}, 
{ 
  id: "rit_kottayam", 
  name: "RIT Kottayam", 
  city: "Kottayam", 
  state: "Kerala", 
  image: "public/img/clg/RIT-Kottayam.jpg", 
  logo: "public/img/log/RIT-Kottayam-Logo.jpg" 
}, 
{ 
  id: "nssce_palakkad", 
  name: "NSSCE Palakkad", 
  city: "Palakkad", 
  state: "Kerala", 
  image: "public/img/clg/NSSCE-Palakkad.jpg", 
  logo: "public/img/log/NSSCE-Palakkad-Logo.jpg" 
}, 
{ 
  id: "rset_kochi", 
  name: "RSET Kochi", 
  city: "Kochi", 
  state: "Kerala", 
  image: "public/img/clg/RSET-Kochi.jpg", 
  logo: "public/img/log/RSET-Kochi-Logo.jpg" 
}, 
 
{ 
  id: "nmamit_nitte", 
  name: "NMAMIT Nitte", 
  city: "Nitte", 
  state: "Karnataka", 
  image: "public/img/clg/NMAMIT-Nitte.jpg", 
  logo: "public/img/log/Nitte-Trust-Logo.jpg" 
}, 
{ 
  id: "bnmit_bangalore", 
  name: "BNMIT Bangalore", 
  city: "Bangalore", 
  state: "Karnataka", 
  image: "public/img/clg/BNMIT-Bangalore.jpg", 
  logo: "public/img/log/BNMIT-Bangalore-Logo.jpg" 
}, 
{ 
  id: "nmit_bangalore", 
  name: "NMIT Bangalore", 
  city: "Bangalore", 
  state: "Karnataka", 
  image: "public/img/clg/NMIT-Bangalore.jpg", 
  logo: "public/img/log/MNIT-Jaipur-Logo.jpg" 
}, 
{ 
  id: "uit_rgpv_bhopal", 
  name: "UIT-RGPV Bhopal", 
  city: "Bhopal", 
  state: "Madhya Pradesh", 
  image: "public/img/clg/UIT-RGPV-Bhopal.jpg", 
  logo: "/public/img/log/RGPV-Logo.jpg" 
}, 
{ 
  id: "knit_sultanpur", 
  name: "KNIT Sultanpur", 
  city: "Sultanpur", 
  state: "Uttar Pradesh", 
  image: "public/img/clg/KNIT-Sultanpur.jpg", 
  logo: "public/img/log/KNIT-Sultanpur-Logo.jpg" 
}, 
{ 
  id: "biet_jhansi", 
  name: "BIET Jhansi", 
  city: "Jhansi", 
  state: "Uttar Pradesh", 
  image: "public/img/clg/BIET-Jhansi.jpg", 
  logo: "public/img/log/BIET-Jhansi-Logo.jpg" 
}, 
{ 
  id: "pccoe_pune", 
  name: "PCCOE Pune", 
  city: "Pune", 
  state: "Maharashtra", 
  image: "public/img/clg/PCCOE-Pune.jpg", 
  logo: "/public/img/log/PCCOE-Pune-Logo.jpg" 
}, 
{ 
  id: "rcoem_nagpur", 
  name: "RCOEM Nagpur", 
  city: "Nagpur", 
  state: "Maharashtra", 
  image: "/img/clg/RCOEM-Nagpur.jpg",
  logo: "public/img/log/RCOEM-Nagpur-Logo.jpg" 
}, 
{ 
  id: "sastra_thanjavur", 
  name: "SASTRA Thanjavur", 
  city: "Thanjavur", 
  state: "Tamil Nadu", 
  image: "/img/clg/SASTRA-Thanjavur.jpg", 
  logo: "public/img/log/SASTRA-Thanjavur-Logo.jpg" 
}, 

{ 
  id: "ceg_guindy", 
  name: "CEG Guindy", 
  city: "Chennai", 
  state: "Tamil Nadu", 
  image: "/img/clg/CEG-Guindy.jpg", 
  logo: "public/img/log/CEG-Guindy-Logo.jpg" 
}, 
 
{ 
  id: "psg_tech_coimbatore", 
  name: "PSG Tech Coimbatore", 
  city: "Coimbatore", 
  state: "Tamil Nadu", 
  image: "/img/clg/PSG-Tech-Coimbatore.jpg", 
  logo: "public/img/log/PSGCT-Coimbatore-Logo.jpg" 
}, 
{ 
  id: "mit_chromepet", 
  name: "MIT Chromepet", 
  city: "Chromepet", 
  state: "Tamil Nadu", 
  image: "/img/clg/MIT-Chromepet.jpg", 
  logo: "public/img/log/MIT-Chromepet-Logo.jpg" 
}, 
{ 
  id: "ssnce_chennai", 
  name: "SSNCE Chennai", 
  city: "Chennai", 
  state: "Tamil Nadu", 
  image: "/img/clg/SSNCE-Chennai.jpg", 
  logo: "public/img/log/SSN-Institutions-Logo.jpg" 
}, 
{ 
  id: "tce_madurai", 
  name: "TCE Madurai", 
  city: "Madurai", 
  state: "Tamil Nadu", 
  image: "/img/clg/TCE-Madurai.jpg", 
  logo: "public/img/log/TCE-Madurai-Logo.jpg" 
}, 
{ 
  id: "cit_coimbatore", 
  name: "CIT Coimbatore", 
  city: "Coimbatore", 
  state: "Tamil Nadu", 
  image: "/img/clg/CIT-Coimbatore.jpg", 
  logo: "public/img/log/CIT-Coimbatore-Logo.jpg" 
}, 
{ 
  id: "actech_chennai", 
  name: "ACTECH Chennai", 
  city: "Chennai", 
  state: "Tamil Nadu", 
  image: "/img/clg/ACTECH-Chennai.jpg", 
  logo: "public/img/log/ACTECH-Chennai-Logo.jpg" 
}, 
{ 
  id: "gct_coimbatore", 
  name: "GCT Coimbatore", 
  city: "Coimbatore", 
  state: "Tamil Nadu", 
  image: "/img/clg/GCT-Coimbatore.jpg", 
  logo: "public/img/log/GCT-Coimbatore-Logo.jpg" 
}, 
{ 
  id: "kct_coimbatore", 
  name: "KCT Coimbatore", 
  city: "Coimbatore", 
  state: "Tamil Nadu", 
  image: "/img/clg/KCT-Coimbatore.jpg", 
  logo: "public/img/log/KCT-Coimbatore-Logo.jpg" 
}, 
 
{ 
  id: "svce_sriperumbudur", 
  name: "SVCE Sriperumbudur", 
  city: "Sriperumbudur", 
  state: "Tamil Nadu", 
  image: "/img/clg/SVCE-Sriperumbudur.jpg", 
  logo: "public/img/log/SVCE-Sriperumbudur-Logo.jpg" 
}, 
{ 
  id: "psg_itech_coimbatore", 
  name: "PSG iTech Coimbatore", 
  city: "Coimbatore", 
  state: "Tamil Nadu", 
  image: "public/img/clg/PSG-iTech-Coimbatore.jpg", 
  logo: "public/img/log/PSG-iTech-Coimbatore-Logo.jpg", 
}, 
{ 
  id: "skcet_coimbatore", 
  name: "SKCET Coimbatore", 
  city: "Coimbatore", 
  state: "Tamil Nadu", 
  image: "public/img/clg/SKCET-Coimbatore.jpg", 
  logo: "public/img/log/SKI-Coimbatore-Logo.jpg", 
}, 
{ 
  id: "rec_chennai", 
  name: "REC Chennai", 
  city: "Chennai", 
  state: "Tamil Nadu", 
  image: "public/img/clg/REC-Chennai.jpg", 
  logo: "public/img/log/REC-Chennai-Logo.jpg", 
}, 
{ 
  id: "niftem_thanjavur", 
  name: "NIFTEM Thanjavur", 
  city: "Thanjavur", 
  state: "Tamil Nadu", 
  image: "public/img/clg/NIFTEM-Thanjavur.jpg", 
  logo: "public/img/log/NIFTEM-Thanjavur-Logo.jpg", 
}, 
 
{ 
    
      id: "SPA Delhi ", 
      name: "SPA Delhi", 
      city: "New Delhi", 
      state: "Delhi", 
      image: "public/img/clg/SPA-Delhi.jpg", 
      logo: "public/img/log/SPA-Delhi-Logo.jpg", 
  }, 
{ 
    id: "SPA Bhopal", 
    name: "SPA Bhopal", 
    city: "Bhopal", 
    state: "Madhya Pradesh ", 
    image: "public/img/clg/SPA-Bhopal.jpg", 
    logo: "public/img/log/SPA-Bhopal-Logo.jpg", 
  }, 
  { 
    id: "SOE Tezpur", 
    name: "SOE Tezpur", 
    city: "Tezpur", 
    state: "Assam", 
    image: "public/img/clg/SOE-Tezpur-University.jpg", 
    logo: "public/img/log/Tezpur-University-Logo.jpg", 
  }, 
  { 
    id: "CIT Chennai ", 
    name: "CIT Chennai ", 
    city: "Chennai", 
    state: "Tamil Nadu", 
    image: "public/img/clg/CIT-Chennai.jpg", 
    logo: "public/img/log/CIT-Chennai-Logo.jpg", 
  }, 
  { 
    id: "CECRI Karaikudi", 
    name: "CECRI Karaikudi", 
    city: "Karaikudi", 
    state: "Tamil Nadu ", 
    image: "public/img/clg/CSIR-CECRI-Karaikudi.jpg", 
    logo: "public/img/log/CSIR-Logo.jpg", 
  }, 
  { 
    id: "ICT-IOC Bhubaneswar", 
    name: "ICT-IOC Bhubaneswar", 
    city: "Bhubaneswar", 
    state: "Odisha ", 
    image: "public/img/clg/ICT-IOC-Bhubaneswar.jpg", 
    logo: "public/img/log/ICT-Mumbai-Logo.jpg", 
  },{ 
    id: "LPU Jalandhar ", 
    name: "LPU Jalandhar", 
    city: "Jalandhar", 
    state: "Punjab", 
    image: "public/img/clg/LPU-Jalandhar.jpg", 
    logo: "public/img/log/LPU-Jalandhar-Logo.jpg", 
  }, 
  { 
    id: "ISI Kolkata", 
    name: "ISI Kolkata", 
    city: "Kolkata", 
    state: "West Bengal", 
    image: "public/img/clg/ISI-Kolkata.jpg", 
    logo: "public/img/log/ISI-Institute-Logo.jpg", 
  }, 
  { 
    id: "ISI Bangalore", 
    name: "ISI Bangalore", 
    city: "Bangalore", 
    state: "Karnataka", 
    image: "public/img/clg/ISI-Bangalore.jpg", 
    logo: "public/img/log/ISI-Bangalore-Logo.jpg", 
  }, 
  { 
    id: "BIT Patna", 
    name: "BIT Patna", 
    city: "Patna", 
    state: "Bihar", 
    image: "public/img/clg/BIT-Patna.jpg", 
    logo: "public/img/log/BIT-Mesra-Logo (1).jpg", 
  }, 
  { 
    id: "Techno Main Salt Lake", 
    name: "Techno Main Salt Lake ", 
    city: "Kolkata", 
    state: "West Bengal ", 
    image: "public/img/clg/Techno-Main-Salt-Lake.jpg", 
    logo: "public/img/log/Techno-India-Group-Logo.jpg", 
  }, 
  { 
    id: "HIT Haldia", 
    name: "HIT Haldia", 
    city: "Haldia", 
    state: "West Bengal", 
    image: "public/img/clg/HIT-Haldia.jpg", 
    logo: "public/img/log/HIT-Haldia-Logo.jpg", 
  }, 
  { 
    id: "MMMUT Gorakhpur ", 
    name: "MMMUT Gorakhpur", 
    city: "Gorakhpur", 
    state: "Uttar Pradesh ", 
    image: "public/img/clg/MMMUT-Gorakhpur.jpg", 
    logo: "public/img/log/MMMUT-Gorakhpur-Logo.jpg", 
  }, 
  { 
    id: "FoT DU Delhi", 
    name: "FoT DU Delhi ", 
    city: "New Delhi", 
    state: "Delhi", 
    image: "public/img/clg/Faculty-of-Tech-DU.jpg", 
    logo: "public/img/log/Delhi-University-Logo.jpg", 
  }, 
  { 
    id: "GVPCE Visakhapatnam", 
    name: "GVPCE Visakhapatnam", 
    city: "Visakhapatnam", 
    state: "Andhra Pradesh", 
    image: "public/img/clg/GVPCE-Visakhapatnam.jpg", 
    logo: "public/img/log/GVPCE-Visakhapatnam-Logo.jpg", 
  }, 
  { 
    id: "VRSEC Vijayawada", 
    name: "VRSEC Vijayawada", 
    city: "Vijayawada", 
    state: "Andhra Pradesh", 
    image: "public/img/clg/VRSEC-Vijayawada.jpg", 
    logo: "public/img/log/VRSEC-Vijayawada-Logo.jpg", 
  }, 
  { 
    id: "JNTUA CEA Anantapur", 
    name: "JNTUA CEA Anantapur", 
    city: "Anantapur", 
    state: "Andhra Pradesh", 
    image: "public/img/clg/JNTUA-CEA-Anantapur.jpg", 
    logo: "public/img/log/JNTUA-Anantapur-Logo.jpg", 
  },{ 
    id: "MU Jaipur", 
    name: "MU Jaipur", 
    city: "Jaipur", 
    state: "Rajasthan", 
    image: "public/img/clg/MU-Jaipur.jpg", 
    logo: "public/img/log/Manipal-University-Logo.jpg", 
  }, 
  { 
    id: "NIAMT Ranchi", 
    name: "NIAMT Ranchi", 
    city: "Ranchi", 
    state: "Jharkhand", 
    image: "public/img/clg/NIAMT-Ranchi.jpg", 
    logo: "public/img/log/NIAMT-Ranchi-Logo.jpg", 
  },
  {
    id: "gsv_vadodara",
    name: "GSV Vadodara",
    city: "Vadodara",
    state: "Gujarat",
    image: "public/img/clg/GSV-Vadodara.jpg", // or your image path
    logo: "public/img/log/GSV-Vadodara-Logo.jpg"
  }
];
  

  const filters = {
    State: ["Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh","Chhattisgarh","Daman and Diu","Delhi","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Puducherry","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh","Uttarakhand"],
    City:["Agartala","Ahmedabad","Aizawl","Aligarh","Allahabad","Amaravati","Amethi","Anantapur","Bangalore","Berhampur","Bhagalpur","Bhilai","Bhopal","Bhubaneswar","Calicut","Chandigarh","Chennai","Chromepet","Cochin","Coimbatore","Dehradun","Dhanbad","Dharwad","Dimapur","Diu","Durgapur","Faridabad","Gandhinagar","Garhwal","Gorakhpur","Guwahati","Gwalior","Haldia","Hamirpur","Haridwar","Hubli","Hyderabad","Ibrahimpatnam","Imphal","Indore","Jabalpur","Jaipur","Jalandhar","Jalpaiguri","Jammu","Jamshedpur","Jhansi","Jodhpur","Kakinada","Kalyani","Kanpur","Karaikal","Karaikudi","Kharagpur","Kochi","Kolkata","Kollam","Kota","Kothamangalam","Kottayam","Kurnool","Kurukshetra","Lucknow","Madurai','Mandi","Mangalore","Manipal","Mohali","Mumbai","Mysore","Nagpur","Naya Raipur","New Delhi","Nitte","Noida","Palakkad","Papum Pare","Patiala","Patna","Pilani","Ponda","Puducherry","Pune","Raichur","Raipur","Ranchi","Ravangla","Roorkee","Ropar","Rourkela","Sangli","Shibpur","Shillong","Silchar","Sonepat","Sri City","Srinagar","Sriperumbudur","Sultanpur","Surat","Tadepalligudem","Tezpur","Thanjavur","Thiruvananthapuram","Thrissur","Tiruchirappalli","Tirupati","Tumkur","Una","Vadodara","Varanasi","Vellore","Vijayawada" ],
    Stream: ["Engineering","Research","Architecture"],
    Type: ["Govt","PPP","Private"],
    "Sub-Type": ["IIT","NIT","IIIT","GFTI","BITS","Other","IISc","IIST","IISER","NISER","UPTU","IPU","VTU","SPPU","KTU","AU","SPA"],
    Course: ["B.E./B.Tech.","B.Sc.","B.Pharm.","B.Plan.","B.Des.","B.Arch.","B.Tech + M.Tech. (Dual Degree)","Integrated M.Tech.","B.Tech + MBA (Dual Degree) Integrated M.Sc.","B.Sc. + M.Sc. (Dual Degree)","B.Tech. + MS (Dual Degree)","B.Pharm. + M.Pharm. (Dual Degree)","Integrated B.Tech + M.Tech/MBA","B.Tech + M.Tech. (Dual Degree 4+2 years)","B.Tech + MBA (Dual Degree 4+2 years)","B.E.","B.Stat.","B.Math."],
    Branch: ["Aeronautical Engineering","Aerospace Engineering","Agricultural and Food Engineering","Agricultural Engineering","Applied Electronics and Instrumentation","Applied Geology","Applied Geophysics","Applied Mathematics","Architecture","Artificial Intelligence","Artificial Intelligence and Data Science","Automobile Engineering","Automotive Design Engineering","Aviation Engineering","Avionics","Bio Engineering","Bio Medical Engineering","Biochemical Engineering","Bioinformatics","Biological Engineering","Biological Sciences","Biological Sciences and Bioengineering","Biology","Biotechnology","Biotechnology and Biochemical Engineering","Biotechnology and Bioinformatics","Carpet and Textile Technology","Ceramic Engineering","Chemical and Biochemical Engineering","Chemical and Electrochemical Engineering","Chemical Engineering","Chemical Science and Technology","Chemistry","Civil Engineering","Communication and Computer Engineering","Computational and Data Science","Computational Engineering","Computational Mathematics","Computer Engineering","Computer Science and Applied Mathematics","Computer Science and Artificial Intelligence","Computer Science and Business","Computer Science and Engineering",
      "Computer Science and Financial Technology","Computer Science and Information Technology","Computer Science and Technology","Construction Engineering","Cyber Physical Systems","Data Science and Artificial Intelligence","Data Science and Engineering","Design","Dyestuff Technology","Earth and Environmental Sciences","Earth Sciences","Economics","Electrical and Electronics Engineering","Electrical Engineering","Electronics and Bio-Medical Engineering","Electronics and Communication Engineering","Electronics and Computer Engineering","Electronics and Electrical Communication Engineering","Electronics and Instrumentation Engineering","Electronics and Telecommunication Engineering","Electronics Engineering","Electronics System Engineering","Energy Engineering","Engineering and Computational Mechanics","Engineering Design","Engineering Physics","Engineering Science","Environmental Engineering","Exploration Geophysics","Fashion Technology","Fire Safety Engineering","Food Engineering and Technology","Food Process Engineering","Food Technology","Food Technology and Bio Chemical Engineering","General Engineering","General Studies","Geo Informatics Engineering","Geo Science Engineering","Geological Technology",
      "Geophysical Technology","Industrial and Production Engineering","Industrial and Systems Engineering","Industrial Biotechnology","Industrial Chemistry","Industrial Design","Industrial Engineering","Industrial Engineering and Management","Industrial Internet of Things","Information and Communication Technology","Information Science and Engineering","Information Technology","Information Technology and Engineering","Information Technology and Mathematical Innovations","Instrumentation and Control Engineering","Instrumentation and Electronics Engineering","Instrumentation Engineering","Integrated Circuit Design and Technology","Integrated M.Sc. in Science","Jute and Fibre Technology","Leather Technology","Life Science","Manufacturing Engineering","Manufacturing Processes and Automation Engineering","Manufacturing Science and Engineering","Marine Engineering","Material Science","Materials","Materials Science and Engineering","Materials Science and Technology","Mathematics","Mathematics and Computing","Mathematics and Data Science","Mathematics and Scientific Computing","Mechanical and Automation Engineering","Mechanical Engineering","Mechatronics","Media Technology","Medical Electronics",
      "Metallurgical and Materials Engineering","Metallurgical Engineering","Metallurgical Engineering and Materials Science","Metallurgy and Materials Engineering","Microelectronics and VLSI","Mineral and Metallurgical Engineering","Mineral Engineering","Mining Engineering","Mining Machinery Engineering","Mining Safety Engineering","Nanotechnology","Naval Architecture and Ship Building","Nuclear Science and Technology","Ocean Engineering and Naval Architecture","Oil Technology","Optics and Optoelectronics","Paint Technology","Petrochemical Engineering","Petroleum Engineering","Pharmaceutical Engineering & Technology","Pharmaceutics","Pharmacy","Photonics","Physics","Planning","Plastic Engineering","Polymer Science and Chemical Technology","Polymer Science and Engineering","Polymer Science and Technology","Power Engineering","Power System Engineering","Printing and Packaging Technology","Printing Engineering","Production Engineering","Quality Engineering Design and Manufacturing","Quantitative Economics and Data Science","Renewable Energy Engineering","Robotics and Artificial Intelligence","Robotics and Automation Engineering","Rubber and Plastic Technology","Science","Smart Manufacturing",
      "Software Engineering","Space Sciences and Engineering","Statistics","Statistics and Data Science","Surface Coating Technology","Sustainability Engineering"]
  };
  
  const toggleFilter = (filter) => {
    setOpenFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  const handleSearchChange = (filter, term) => {
    setSearchTerms(prev => ({
      ...prev,
      [filter]: term.toLowerCase()
    }));
  };

  const handleCheckboxChange = (filter, option) => {
    setSelectedFilters(prev => {
      const newSelection = { ...prev };
      if (!newSelection[filter]) {
        newSelection[filter] = [];
      }

      if (newSelection[filter].includes(option)) {
        newSelection[filter] = newSelection[filter].filter(item => item !== option);
        if (newSelection[filter].length === 0) {
          delete newSelection[filter];
        }
      } else {
        newSelection[filter] = [...newSelection[filter], option];
      }
      
      return newSelection;
    });
  };

  const getFilteredOptions = (filter) => {
    const term = searchTerms[filter] || '';
    return filters[filter].filter(option => 
      option.toLowerCase().includes(term)
    );
  };

  const filteredColleges = colleges.filter(college => {
    for (const filter in selectedFilters) {
      if (selectedFilters[filter].length > 0) {
        // For State filter
        if (filter === 'State' && !selectedFilters[filter].includes(college.state)) {
          return false;
        }
        // For City filter
        if (filter === 'City' && !selectedFilters[filter].includes(college.city)) {
          return false;
        }
        // Add more filter conditions as needed
      }
    }
    return true;
  });

  const loadMoreColleges = useCallback(() => {
    if (isLoadingMore || visibleColleges >= filteredColleges.length) return;
    
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleColleges(prev => Math.min(prev + 15, filteredColleges.length));
      setIsLoadingMore(false);
    }, 500);
  }, [isLoadingMore, visibleColleges, filteredColleges.length]);

  useEffect(() => {
    if (!loadMoreRef.current) return;

    const options = {
      root: null,
      rootMargin: '100px',
      threshold: 0.1
    };

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreColleges();
      }
    }, options);

    observerRef.current.observe(loadMoreRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMoreColleges]);

  // Reset visible colleges when filters change
  useEffect(() => {
    setVisibleColleges(15);
  }, [selectedFilters]);

  // Function to generate image paths
  const getImagePaths = (college) => {
    const baseName = college.id.toLowerCase().replace(/\s+/g, '');
    return {
      image: `/img/clg/${baseName}.jpg`,
      logo: `/img/clg/${baseName}logo.jpg`
    };
  };

  return (<div>
    <div>
      <nav className="clg-navbar">
        <img src="/img/clgpravesh logo.jpg" alt="Logo" className="clg-logo" />
        <h2 className="clg-navbar-title">Find the right college with our College Finder.</h2>
        <div className="clg-navbar-right">
          <ul className="clg-nav-links">
            <li><Link to="/news">News</Link></li>
            <li className="active"><Link to="/colleges">Colleges</Link></li>
            <li><Link to="/exams">Exams</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/tools">Tools</Link></li>
            <li><Link to="/forum">Forum</Link></li>
          </ul>
          <input type="text" className="search-bar" placeholder="Search..." />
        </div>
      </nav>

      <div className="black-strip">
        <h2>Follow us on WhatsApp</h2>
      </div>

      <div className="c-content">
        {/* Left Pane */}
        <div className="clg-left-pane">
          <h3>Search Filters</h3>
          <hr className="clg-underline" />
          <ul className="filter-list">
            {Object.keys(filters).map((filter, index) => (
              <div key={index}>
                <li
                  className={`filter-item ${openFilters.includes(filter) ? "active" : ""}`}
                  onClick={() => toggleFilter(filter)}
                >
                  {filter} <span className="arrow">{openFilters.includes(filter) ? "▲" : "▼"}</span>
                </li>
                <div className="filter-options" style={{ maxHeight: openFilters.includes(filter) ? "200px" : "0" }}>
                  <input 
                    type="text" 
                    className="search-input" 
                    placeholder={`Search ${filter}`}
                    value={searchTerms[filter] || ''}
                    onChange={(e) => handleSearchChange(filter, e.target.value)}
                  />
                  <ul className="checkbox-list">
                    {getFilteredOptions(filter).map((option, idx) => (
                      <li key={idx}>
                        <input 
                          type="checkbox" 
                          id={`${filter}-${idx}`}
                          checked={selectedFilters[filter]?.includes(option) || false}
                          onChange={() => handleCheckboxChange(filter, option)}
                        />
                        <label htmlFor={`${filter}-${idx}`}>{option}</label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </ul>
        </div>


        <div className="clg-right-pane">
            <h3 className="clg-right-pane-title">
              Colleges <span className="college-count">({Math.min(visibleColleges, filteredColleges.length)} / {filteredColleges.length})</span>
            </h3>

            <div className="college-grid">
              {filteredColleges.slice(0, visibleColleges).map((college) => {
                const images = getImagePaths(college);
                return (
                  <Link to={`/${college.id}`} key={college.id} className="college-card">
                    <div className="image-container">
                      <img
                        src={college.image}
                        alt={college.name}
                        className="college-image"
                        onError={(e) => { e.target.src = '/img/clg/default.jpg'; }}
                      />
                      <img
                        src={college.logo}
                        alt={`${college.name} logo`}
                        className="b-college-logo"
                        onError={(e) => { e.target.src = '/img/clg/default_logo.jpg'; }}
                      />
                    </div>
                    <h4 className="college-name">{college.name}</h4>
                    <p className="college-location">
                      {college.city}, {college.state}
                    </p>
                  </Link>
                );
              })}
            </div>

            {/* Loading indicator */}
            {isLoadingMore && (
              <div className="loading-indicator">
                <div className="spinner"></div>
                Loading more colleges...
              </div>
            )}

            {/* Infinite scroll trigger (hidden when all loaded) */}
            {visibleColleges < filteredColleges.length && (
              <div ref={loadMoreRef} style={{ height: '1px' }} aria-hidden="true" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Colleges;