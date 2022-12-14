const puppeteer = require('puppeteer'); 

const urlList = ['https://www.adams.edu/',
                'https://www.adams.edu/academics/',
                'https://www.adams.edu/academics/graduate/counselor-education/masters/',
                'https://www.adams.edu/catalog/',
                'https://www.adams.edu/faculty-staff/',
                'https://www.adams.edu/financial-aid/scholarships/',
                'https://www.adams.edu/onestop/',
                'https://www.adams.edu/online/',
                'https://www.adams.edu/records/transcript-request/',
                'https://www.adams.edu/students/housing/',
                'https://catalog.aims.edu/content.php?catoid=26&navoid=2694',
                'https://online.aims.edu/d2l/login',
                'https://www.aims.edu/',
                'https://www.aims.edu/admissions/visit-campus',
                'https://www.aims.edu/careers',
                'https://www.aims.edu/departments',
                'https://www.aims.edu/departments/cashiers-office',
                'https://www.aims.edu/departments/registration-and-records',
                'https://www.aims.edu/login',
                'https://www.aims.edu/programs/continuing-education',
                'https://www.arapahoe.edu/',
                'https://www.arapahoe.edu/about-acc/locations/online',
                'https://www.arapahoe.edu/academics-programs/catalog/academic-plans',
                'https://www.arapahoe.edu/academics-programs/catalog/courses',
                'https://www.arapahoe.edu/academics-programs/catalog/student-resources-and-services',
                'https://www.arapahoe.edu/academics-programs/course-schedules-0',
                'https://www.arapahoe.edu/academics-programs/programs',
                'https://www.arapahoe.edu/admissions',
                'https://www.arapahoe.edu/admissions/records-and-enrollment-services',
                'https://www.arapahoe.edu/contact',
                'https://www.aspen.edu/',
                'https://www.aspen.edu/accreditation/',
                'https://www.aspen.edu/altitude/',
                'https://www.aspen.edu/contact/',
                'https://www.aspen.edu/degrees/',
                'https://www.aspen.edu/ferpa/',
                'https://www.aspen.edu/nursing/',
                'https://www.aspen.edu/scholarship/',
                'https://www.aspen.edu/terms/',
                'https://www.aspen.edu/tuition/',
                'http://www.capellamissioncritical.com/?linkID=173836&refr=',
                'https://www.capella.edu/',
                'https://www.capella.edu/campus-locations/',
                'https://www.capella.edu/capella-experience/',
                'https://www.capella.edu/careers/cybersecurity/',
                'https://www.capella.edu/honors-pathway/',
                'https://www.capella.edu/scholarship/',
                'https://www.capella.edu/simplenursing/',
                'https://www.capella.edu/sitemap/',
                'https://www.capella.edu/university-policies/',
                'https://www.cffp.edu/',
                'https://www.cffp.edu/',
                'https://www.cffp.edu/cfp-education/',
                'https://www.cffp.edu/cfp-exam-prep-review/',
                'https://www.cffp.edu/fpa',
                'https://www.cffp.edu/history/',
                'https://www.cffp.edu/misson-vision-values/',
                'https://www.cffp.edu/office-of-institutional-research-effectiveness/',
                'https://www.cffp.edu/regulation/',
                'https://www.cffp.edu/who-we-are/',
                'https://www.ccu.edu/',
                'https://www.ccu.edu/academics/',
                'https://www.ccu.edu/academy/',
                'https://www.ccu.edu/accommodations/',
                'https://www.ccu.edu/accreditations/',
                'https://www.ccu.edu/athletics/',
                'https://www.ccu.edu/campaign/',
                'https://www.ccu.edu/catalog/',
                'https://www.ccu.edu/ccu/financialaid/deferred-payment-plan/',
                'https://www.ccu.edu/parents/',
                'https://coloradocollege.bncollege.com/',
                'https://www.coloradocollege.edu/',
                'https://www.coloradocollege.edu/academics/dept/music/newsevents/billyjoel/',
                'https://www.coloradocollege.edu/offices/careercenter/',
                'https://www.coloradocollege.edu/library/',
                'https://www.coloradocollege.edu/us/students/new/',
                'https://www.coloradocollege.edu/offices/sustainability/',
                'https://www.coloradocollege.edu/basics/welcome/leadership/policies/index.html',
                'https://www.coloradocollege.edu/other/ssi/index.html',
                'https://www.coloradocollege.edu/other/stroudscholars/',
                'https://www.coloradomesa.edu/',
                'https://www.coloradomesa.edu/admissions/brendan.html',
                'https://cmumavericks.com/',
                'https://www.coloradomesa.edu/calendar/',
                'https://www.coloradomesa.edu/commencement-photos.html',
                'https://www.coloradomesa.edu/future.html',
                'https://www.coloradomesa.edu/innovation/index.html',
                'https://www.coloradomesa.edu/kinesiology/clubs.html',
                'https://cmumavericks.com/sports/2013/7/25/MavClub.aspx',
                'https://www.coloradomesa.edu/trustees/index.html',
                'https://catalog.coloradomtn.edu/',
                'https://coloradomtn.edu/',
                'https://coloradomtn.edu/academics/',
                'https://coloradomtn.edu/classes/',
                'https://coloradomtn.edu/firstgen/',
                'https://coloradomtn.edu/labormarket/',
                'https://coloradomtn.edu/programs/',
                'https://coloradomtn.edu/scholarships/',
                'https://coloradomtn.edu/transcripts/',
                'https://library.coloradomtn.edu/home',
                'https://www.cncc.edu/',
                'https://www.cncc.edu/accomodations',
                'https://www.cncc.edu/apply/',
                'https://www.cncc.edu/apprenticeships',
                'https://www.cncc.edu/faqs',
                'https://www.cncc.edu/fwys',
                'https://www.cncc.edu/orientation',
                'https://www.cncc.edu/spa3',
                'https://www.cncc.edu/surveys',
                'https://www.cncc.edu/transfer',
                'https://www.mines.edu/',
                'https://www.mines.edu/bursar/',
                'https://www.mines.edu/diversity/',
                'https://www.mines.edu/global/',
                'https://www.mines.edu/mission/',
                'https://www.mines.edu/pcmo/',
                'https://www.mines.edu/privacy/',
                'https://www.mines.edu/registrar/',
                'https://www.mines.edu/techfee/',
                'https://www.mines.edu/veterans/',
                'https://www.cstcm.edu/',
                'https://www.cstcm.edu/accreditation/',
                'https://www.cstcm.edu/activity/',
                'https://www.cstcm.edu/cart/',
                'https://www.cstcm.edu/clinic/',
                'https://www.cstcm.edu/clinicforum/',
                'https://www.cstcm.edu/daom/',
                'https://www.cstcm.edu/library/',
                'https://www.cstcm.edu/organizations/',
                'https://www.cstcm.edu/tutoring/',
                'https://www.colostate.edu/',
                'https://www.colostate.edu/academics/',
                'https://www.colostate.edu/acronym-finder/',
                'https://www.colostate.edu/admin/',
                'https://www.colostate.edu/brandcampaign-2/',
                'https://www.colostate.edu/contact/',
                'https://www.colostate.edu/disclaimer/',
                'https://www.colostate.edu/employment/',
                'https://www.colostate.edu/equal-opportunity/',
                'https://www.colostate.edu/privacy/',
                'https://www.csupueblo.edu/',
                'https://www.csupueblo.edu/admissions/index.html',
                'https://www.csupueblo.edu/alumni/index.html',
                'https://www.csupueblo.edu/calendar/',
                'https://www.csupueblo.edu/catalog/',
                'https://www.csupueblo.edu/coronavirus/',
                'https://www.csupueblo.edu/linc/index.html',
                'https://www.csupueblo.edu/music/index.html',
                'https://www.csupueblo.edu/parents/index.html',
                'https://www.csupueblo.edu/registrar/index.html',
                'https://www.coloradotech.edu/',
                'https://www.coloradotech.edu/about',
                'https://www.coloradotech.edu/academics',
                'https://www.coloradotech.edu/admissions',
                'https://www.coloradotech.edu/blog',
                'https://www.coloradotech.edu/degrees',
                'https://www.coloradotech.edu/denver',
                'https://www.coloradotech.edu/graduation',
                'https://www.coloradotech.edu/military',
                'https://www.coloradotech.edu/sitemap',
                'https://www.ccis.edu/',
                'https://www.ccis.edu/about',
                'https://www.ccis.edu/careers',
                'https://www.ccis.edu/degrees',
                'https://www.ccis.edu/directory',
                'https://www.ccis.edu/student-life/student-organizations-societies/leadership/emerging-leaders-institute',
                'https://www.ccis.edu/locations',
                'https://www.ccis.edu/online',
                'https://www.ccis.edu/parents',
                'https://www.ccis.edu/truition',
                'https://www.ccaurora.edu/',
                'https://www.ccaurora.edu/Careers',
                'https://www.ccaurora.edu/department-listings',
                'https://www.ccaurora.edu/fees',
                'https://www.ccaurora.edu/getting-started',
                'https://www.ccaurora.edu/mycca-tab',
                'https://www.ccaurora.edu/online',
                'https://www.ccaurora.edu/programs-classes/online-learning',
                'https://www.ccaurora.edu/registration',
                'https://www.ccaurora.edu/user/login',
                'https://catalog.ccd.edu/enrollment-student-services/getting-started/ccdconnect/',
                'https://www.ccd.edu/',
                'https://www.ccd.edu/admission',
                'https://www.ccd.edu/departments',
                'https://www.ccd.edu/event/academic-calendar',
                'https://www.ccd.edu/org/ccd-online',
                'https://www.ccd.edu/org/human-resources',
                'https://www.ccd.edu/org/office-registration-records',
                'https://www.ccd.edu/programs',
                'https://www.ccd.edu/students',
                'https://www.concorde.edu/',
                'https://www.concorde.edu/admissions',
                'https://www.concorde.edu/admissions/resources',
                'https://www.concorde.edu/campus',
                'https://www.concorde.edu/campus/online',
                'https://www.concorde.edu/lp/vocationalnursing',
                'https://www.concorde.edu/nursing-programs',
                'https://www.concorde.edu/privacy',
                'https://www.concorde.edu/programs',
                'https://www.concorde.edu/testimonials',
                'http://csuglobal.edu/consumer-information/',
                'http://csuglobal.edu/reenroll',
                'https://csuglobal.edu/',
                'https://csuglobal.edu/about/contact',
                'https://csuglobal.edu/alumni',
                'https://csuglobal.edu/direct/',
                'https://csuglobal.edu/disclaimer',
                'https://csuglobal.edu/privacy',
                'https://csuglobal.edu/student-success/course-catalog',
                'https://learn.csuglobal.edu/',
                'https://www.denvercollegeofnursing.edu/',
                'https://www.denvercollegeofnursing.edu/admissions.html',
                'https://www.denvercollegeofnursing.edu/admissions/apply.html',
                'https://www.denvercollegeofnursing.edu/blog.html',
                'https://www.denvercollegeofnursing.edu/blog/healthcare.html',
                'https://www.denvercollegeofnursing.edu/blog/nursing.html',
                'https://www.denvercollegeofnursing.edu/blog/nursing/diversity-in-nursing.html',
                'https://www.denvercollegeofnursing.edu/career-services.html',
                'https://www.denvercollegeofnursing.edu/programs/global-health-perspectives.html',
                'https://www.denvercollegeofnursing.edu/students.html',
                'https://denverseminary.edu/',
                'https://denverseminary.edu/academics/',
                'https://denverseminary.edu/category/students/',
                'https://denverseminary.edu/contact/',
                'https://denverseminary.edu/employment/',
                'https://denverseminary.edu/giving/',
                'https://denverseminary.edu/job_category/internships/',
                'https://denverseminary.edu/podcast/',
                'https://denverseminary.edu/resources/',
                'https://denverseminary.edu/tag/hope/',
                'https://www.emilygriffith.edu/language-learning-center/',
                'https://www.emilygriffith.edu/',
                'https://www.emilygriffith.edu/assessment/',
                'https://www.emilygriffith.edu/contact/',
                'https://www.emilygriffith.edu/espanol/',
                'https://www.emilygriffith.edu/location/',
                'https://www.emilygriffith.edu/newsletter/',
                'https://www.emilygriffith.edu/payment/',
                'https://www.emilygriffith.edu/programs/',
                'https://www.emilygriffith.edu/refunds/',
                'https://www.fortlewis.edu/',
                'https://www.fortlewis.edu/academics/academic-calendar',
                'https://www.fortlewis.edu/academics/undergraduate-research/undergraduate-research-home',
                'https://www.fortlewis.edu/admission/international-students/international-students-home',
                'https://www.fortlewis.edu/life-at-flc/housing-dining/student-housing-home',
                'https://www.fortlewis.edu/life-at-flc/student-services/advising-registration/advising-registration-home',
                'https://www.fortlewis.edu/life-at-flc/student-services/registrars-office/transcripts',
                'https://www.fortlewis.edu/academics/academic-support-centers/peer-education/peer-education-home',
                'https://www.fortlewis.edu/tuition-aid/financial-aid/financial-aid-home',
                'https://www.fortlewis.edu/tuition-aid/financial-aid/financial-aid-home',
                'https://www.frontrange.edu/',
                'https://www.frontrange.edu/50',
                'https://www.frontrange.edu/about-frcc',
                'https://www.frontrange.edu/campuses',
                'https://www.frontrange.edu/campuses/libraries',
                'https://www.frontrange.edu/careers',
                'https://www.frontrange.edu/espanol',
                'https://www.frontrange.edu/lc-collegenow',
                'https://plainsparadox.submittable.com/submit',
                'https://www.frontrange.edu/primers',
                'https://www.iliff.edu/',
                'https://www.iliff.edu/about/',
                'https://events.iliff.edu/',
                'http://sifr.iliff.edu/',
                'https://apply.iliff.edu/',
                'https://www.iliff.edu/nativeamerican/',
                'https://www.iliff.edu/meetourstudents/',
                'https://www.iliff.edu/vision2022/',
                'https://www.iliff.edu/onlinehybrid/',
                'https://www.iliff.edu/katherinef/',
                'https://www.itea.edu/',
                'https://www.itea.edu/about/',
                'https://www.itea.edu/admissions/',
                'https://www.itea.edu/alumni/',
                'https://www.itea.edu/apply/',
                'https://www.itea.edu/contact/',
                'https://www.itea.edu/donate/',
                'https://www.itea.edu/program/',
                'https://www.itea.edu/program/faculty/',
                'https://www.itea.edu/resources/',
                'https://lamarcc.edu/',
                'https://lamarcc.edu/bridgetobachelors/',
                'https://lamarcc.edu/distancelearningsites/',
                'https://lamarcc.edu/govtownhall2017/',
                'https://lamarcc.edu/more/',
                'https://lamarcc.edu/news/',
                'https://lamarcc.edu/office365/',
                'https://lamarcc.edu/schedule/',
                'https://lamarcc.edu/staff/',
                'https://lamarcc.edu/youbelong/',
                'https://www.msudenver.edu/',
                'https://www.msudenver.edu/admissions/',
                'https://www.msudenver.edu/catalog/',
                'https://www.msudenver.edu/graduate-studies/',
                'https://www.msudenver.edu/online/',
                'https://www.msudenver.edu/programs/',
                'https://www.msudenver.edu/registrar/',
                'https://www.msudenver.edu/registrar/student/',
                'https://www.msudenver.edu/schedules-calendars/',
                'https://www.msudenver.edu/studenthub/',
                'https://www.morgancc.edu/',
                'https://www.morgancc.edu/areas-of-interest/agriculture/',
                'https://bncvirtual.com/morgancc',
                'https://www.morgancc.edu/bridge/',
                'https://www.morgancc.edu/careers/',
                'https://www.morgancc.edu/express/',
                'https://www.morgancc.edu/foundation/',
                'https://www.morgancc.edu/newsroom/',
                'https://www.morgancc.edu/what-we-offer/high-school-options/',
                'https://www.morgancc.edu/summer/',
                'https://www.naropa.edu/',
                'https://www.naropa.edu/academic-affairs/',
                'https://www.naropa.edu/academics/',
                'https://www.naropa.edu/campus-safety/',
                'https://www.naropa.edu/directory/',
                'https://www.naropa.edu/employment/',
                'https://www.naropa.edu/events/',
                'https://www.naropa.edu/academics/academic-support/naropa-writing-center/nwc-experience/',
                'https://www.naropa.edu/directory/',
                'https://www.naropa.edu/transportation/',
                'https://www.njc.edu/',
                'https://www.njc.edu/bookstore',
                'https://www.njc.edu/course-schedules-and-resources',
                'https://www.njc.edu/directory',
                'https://www.njc.edu/library',
                'https://www.njc.edu/locations',
                'https://www.njc.edu/locations/main-campus',
                'https://www.njc.edu/records',
                'https://www.njc.edu/register',
                'https://www.njc.edu/visit-campus',
                'https://www.otero.edu/',
                'https://www.otero.edu/about/employment/',
                'https://www.otero.edu/academics/',
                'https://www.otero.edu/academics/academicpolicies/',
                'https://www.otero.edu/catalog/',
                'https://www.otero.edu/catalog/studentservices/',
                'https://www.otero.edu/futurestudents/',
                'https://www.otero.edu/futurestudents/campuslife/',
                'https://www.otero.edu/payingforcollege/',
                'https://www.otero.edu/servicesandsupport/',
                'https://www.pickenstech.org/',
                'https://www.pickenstech.org/about-us/',
                'https://www.pickenstech.org/contact-us/',
                'https://www.pickenstech.org/ctas/',
                'https://www.pickenstech.org/cyber-security/',
                'https://www.pickenstech.org/privacy-policy/',
                'https://www.pickenstech.org/programs/',
                'https://www.pickenstech.org/programs/skilled-trades/',
                'https://www.pickenstech.org/respiratorytherapyasthma/',
                'https://www.pickenstech.org/students/',
                'https://www.ppcc.edu/',
                'https://www.ppcc.edu/academics/catalog-schedule/index.php',
                'https://www.ppcc.edu/admissions/navigate/index.php',
                'https://www.ppcc.edu/admissions/records/graduation/index.php',
                'https://www.ppcc.edu/admissions/records/index.php',
                'https://www.ppcc.edu/admissions/testing-center/index.php',
                'https://www.ppcc.edu/directory.php',
                'https://www.ppcc.edu/programs/computer-science/index.php',
                'https://www.ppcc.edu/programs/nursing/index.php',
                'https://www.ppcc.edu/student-support/current-students.php',
                'https://www.plattcolorado.edu/',
                'https://www.plattcolorado.edu/about',
                'https://www.plattcolorado.edu/academics',
                'https://www.plattcolorado.edu/academics-1',
                'https://www.plattcolorado.edu/accreditation-approvals',
                'https://www.plattcolorado.edu/facilities',
                'https://www.plattcolorado.edu/financial-information',
                'https://www.plattcolorado.edu/learn',
                'https://www.plattcolorado.edu/nursing-program',
                'https://www.plattcolorado.edu/policy-022700',
                'https://pueblocc.edu/',
                'https://pueblocc.edu/sports',
                'https://pueblocc.edu/graduation',
                'https://pueblocc.edu/ChildhoodCouncil',
                'https://pueblocc.edu/nss',
                'https://pueblocc.edu/pueblocorporatecollege',
                'https://pueblocc.edu/idea',
                'https://pueblocc.edu/COStateFinancialAid',
                'https://pueblocc.edu/EarlyCollege',
                'https://pueblocc.edu/veterans',
                'https://www.rrcc.edu/',
                'https://www.rrcc.edu/carpentry',
                'https://www.rrcc.edu/cyber',
                'https://www.rrcc.edu/ged',
                'https://www.rrcc.edu/geography',
                'https://www.rrcc.edu/history',
                'https://www.rrcc.edu/multimedia',
                'https://www.rrcc.edu/photography',
                'https://www.rrcc.edu/science',
                'https://www.rrcc.edu/sociology',
                'https://www.regis.edu/',
                'https://www.regis.edu/academics/index',
                'https://www.regis.edu/admissions/contact',
                'https://www.regis.edu/bookstore',
                'https://www.regis.edu/coronavirus/index',
                'https://www.regis.edu/default.asp',
                'https://regis.mylegacygift.org/',
                'https://www.regis.edu/policies/',
                'https://www.regis.edu/policies/ferpa',
                'https://www.regis.edu/resilience',
                'https://www.relay.edu/',
                'https://www.relay.edu/alumni',
                'https://www.relay.edu/apply',
                'https://www.relay.edu/careers',
                'https://www.relay.edu/contact',
                'https://www.relay.edu/institution',
                'https://www.relay.edu/leadership',
                'https://www.relay.edu/library',
                'https://www.relay.edu/locations',
                'https://www.relay.edu/policies',
                'https://www.rmcad.edu/',
                'https://www.rmcad.edu/academics/',
                'https://www.rmcad.edu/blog/',
                'https://www.rmcad.edu/cafe/',
                'https://www.rmcad.edu/event/',
                'https://www.rmcad.edu/podcast/',
                'https://www.rmcad.edu/purpose/',
                'https://www.rmcad.edu/redshoe2020/',
                'https://www.rmcad.edu/remotelycreative/',
                'https://www.rmcad.edu/sitemap/',
                'https://www.rvu.edu/',
                'https://www.rvu.edu/about/',
                'https://www.rvu.edu/academics/',
                'https://www.rvu.edu/admissions/',
                'https://www.rvu.edu/alumni/',
                'https://www.rvu.edu/blog/',
                'https://www.rvu.edu/community/',
                'https://www.rvu.edu/contact/',
                'https://www.rvu.edu/event/',
                'https://www.rvu.edu/preceptors/',
                'https://acupuncturecollege.edu/',
                'https://acupuncturecollege.edu/alumni/mentorship',
                'https://acupuncturecollege.edu/alumni-directory',
                'https://acupuncturecollege.edu/blog',
                'https://acupuncturecollege.edu/contact-us',
                'https://acupuncturecollege.edu/node/722',
                'https://acupuncturecollege.edu/resources/supplies',
                'https://acupuncturecollege.edu/tags/acupuncture',
                'https://acupuncturecollege.edu/tags/hygiene',
                'https://acupuncturecollege.edu/tags/japanese',
                'https://www.taft.edu/',
                'https://www.taft.edu/administrative-staff',
                'https://www.taft.edu/careers-at-taft',
                'https://www.taft.edu/course-materials',
                'https://www.taft.edu/grading-examinations/',
                'https://www.taft.edu/independent-vs-directed-study',
                'https://www.taft.edu/military-benefits',
                'https://www.taft.edu/news-blog/taft-university-now-offers-directed-study-format-launches-new-website',
                'https://www.taft.edu/school-of-education',
                'https://www.taft.edu/taft-university-system',
                'https://tcr.edu/',
                'https://tcr.edu/academics/old_programs/massage-therapy-program_old.php',
                'https://tcr.edu/academics/online-programs/physical-therapy-office-professional.php',
                'https://tcr.edu/academics/program_videos/academics/students.php',
                'https://tcr.edu/admissions/potential-additional-fees.php',
                'https://tcr.edu/covid-19/',
                'https://tcr.edu/programs/',
                'https://tcr.edu/programs/advanced-emergency-medical-technician/',
                'https://tcr.edu/staff/',
                'https://tcr.edu/students/',
                'https://trinidadstate.edu/animal-science/',
                'https://trinidadstate.edu/class/',
                'https://trinidadstate.edu/clear.html',
                'https://trinidadstate.edu/construction/',
                'https://trinidadstate.edu/day/',
                'https://trinidadstate.edu/search/',
                'https://trinidadstate.edu/sga-valley/',
                'https://www.trinidadstate.edu/',
                'https://www.trinidadstate.edu/springfest/',
                'https://www.trinidadstate.edu/students/',
                'https://coloradosph.cuanschutz.edu/',
                'https://dental.cuanschutz.edu/',
                'https://graduateschool.cuanschutz.edu/',
                'https://library.cuanschutz.edu/',
                'https://medschool.cuanschutz.edu/',
                'https://nursing.cuanschutz.edu/',
                'https://pharmacy.cuanschutz.edu/',
                'https://www.cuanschutz.edu/',
                'https://www.cuanschutz.edu/offices/facilities-management/parking-transportation-maps/parking',
                'https://www.cuanschutz.edu/student/resources/technology',
                'https://www.colorado.edu/',
                'https://www.colorado.edu/alumni/',
                'https://www.colorado.edu/buffonecard/',
                'https://www.colorado.edu/business/',
                'https://www.colorado.edu/chbe/',
                'https://www.colorado.edu/economics/',
                'https://www.colorado.edu/envd/',
                'https://www.colorado.edu/events/',
                'https://www.colorado.edu/music/',
                'https://www.colorado.edu/summer/',
                'https://entcenterforthearts.org/goca',
                'https://www.uccs.edu/',
                'https://giving.cu.edu/fund/ed-burke-memorial-scholarship-endowment-fund',
                'https://www.uccs.edu/contact',
                'https://cwssp.uccs.edu/',
                'https://www.uccs.edu/journey',
                'https://www.uccs.edu/mission',
                'https://www.uccs.edu/privacystatement',
                'https://riverrunjournal.com/',
                'https://www.uccs.edu/students',
                'https://www.ucdenver.edu/',
                'https://www.ucdenver.edu/academics',
                'https://www.ucdenver.edu/housing-and-dining',
                'https://www.ucdenver.edu/offices/office-of-information-technology',
                'https://dental.cuanschutz.edu/patient-care/our-clinics/oral-and-maxillofacial-surgery-clinic',
                'https://online.cu.edu/',
                'https://www.ucdenver.edu/orientation',
                'https://www.ucdenver.edu/registrar',
                'https://www.ucdenver.edu/student-life',
                'https://www.ucdenver.edu/veterans',
                'https://www.du.edu/',
                'https://www.du.edu/about/overview',
                'https://www.du.edu/bfa/staff',
                'https://www.du.edu/bursar/payment',
                'https://www.du.edu/bursar/tuition',
                'https://www.du.edu/elevate/',
                'https://www.du.edu/info/staff',
                'https://www.du.edu/info/students',
                'https://www.du.edu/msw',
                'https://www.du.edu/online',
                'https://www.unco.edu/',
                'https://www.unco.edu/academics/',
                'https://www.unco.edu/advancement/',
                'https://www.unco.edu/catalyst/',
                'https://www.unco.edu/cof/',
                'https://www.unco.edu/cumbres/',
                'https://www.unco.edu/parents/',
                'https://www.unco.edu/programs/',
                'https://www.unco.edu/research/',
                'https://www.unco.edu/trustees/',
                'https://bookstore.western.edu/',
                'https://events.western.edu/',
                'https://western.edu/',
                'https://western.edu/alumni/',
                'https://western.edu/profile/',
                'https://western.edu/program/anthropology/',
                'https://western.edu/program/ceramics/',
                'https://western.edu/program/jewelry/',
                'https://western.edu/program/marketing/',
                'https://western.edu/program/printmaking/'];

async function getDimensions(lst) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    for (let i = 0; i < lst.length; i++)
    {
        await page.goto(lst[i], { waitUntil: 'networkidle0', timeout: 0 });
        //const numberElements = await page.$$('*').length;
        const numberElements = await page.evaluate(() => document.getElementsByTagName('*').length)
        const height = await page.evaluate(() => document.body.scrollHeight);
        const width = await page.evaluate(() => document.body.scrollWidth);
        const areaPixels = (width * height);
        console.log(lst[i]);
        console.log(numberElements);
        console.log(areaPixels);
    }

    await browser.close();
}

getDimensions(urlList);
