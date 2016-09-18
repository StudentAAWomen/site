
var app = angular.module('ResourcesApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'ResourcesController', 
      templateUrl: 'views/resource.html'
    })
     .when('/resources/:resourceId', { 
       controller: 'ResourcesController', 
       templateUrl: 'views/resource.html'
     }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
}]);


app.controller('ResourcesController', ['$scope', '$routeParams', function($scope, $routeParams) {

  $scope.resources = [
  	{ heading: "Process Overview", paragraph: "The college process starts when you begin to think about what you want to do after high school, and ends when you accept an offer of admision. Along the way, there are applications, interviews, conversations with your teachers and parents, and financial decisions. The links on this page will help you get started.", blocks:[
        {image: "images/bigfuture.jpg", title: "FAQ’s", description: "BigFuture, the College Board's college guide, has many resources to help you decide when, where, and how to apply. This FAQ will get you started.", link:"https://bigfuture.collegeboard.org/get-in/applying-101/applying-to-college-faq"},
        {image: "images/first.jpg", title: "First-Generation Timeline", description: "This comprehensive application timeline has specific advice and resources for first generation students! Browse the rest of the site for more advice tailored to your needs.", link:"http://www.firstgenerationstudent.com/apply/"},
        {image: "images/college board.jpg", title: "College Board", description: "The Common App, SAT tests, and AP tests (learn more in the ‘Standardized Tests’ section) all go through the Collage Board. Familiarize yourself with the site now and get a feel for what’s ahead.", link:"https://www.collegeboard.org/"},
        {image: "images/feeral aid.jpg", title: "Federal Aid", description: "This application road-map weaves in information about applying for Federal Student Aid.", link:"https://studentaid.ed.gov/sa/prepare-for-college/applying"},
        {image: "images/college board.jpg", title: "Timeline – CollegeBoard", description: "This timeline/checklist from the College Board walks you through your senior year. Check it out to stay on track and keep on top of the many steps an application.", link:"http://media.collegeboard.com/digitalServices/pdf/student/apply-to-four-application-timeline.pdf"},
        {image: "images/questbridge.jpg", title: "Timeline - QuestBridge", description: "This timeline from QuestBridge covers junior and senior years, and is geared towards low-income students.", link:"http://www.questbridge.org/for-students/applying-for-college"}
      ]
    },
    { heading: "Find a College", paragraph: "A lot goes in to finding the right college for you. Our mentors can answer your questions about their particular school, but you will probably want to look at other options as well. Take into consideration cost, climate, field of study, campus culture, and more with the links on this page.", blocks:[
        {image: "images/search.jpg", title: "SuperMatch Search", description: "The SuperMatch College Search is a great tool to find colleges that fit with your preferences, budget, interests, and more.", link:"http://www.collegeconfidential.com/college_search/"},
        {image: "images/fiske.jpg", title: "Fiske Guide to Colleges", description: "The Fiske Guide has comprehensive information about hundreds of American colleges and universities. It's available on Amazon, most bookstores, and your college counselor's office. Contact us if you still can’t find a copy.", link:"http://www.amazon.com/Fiske-Guide-Colleges-2015-Edward/dp/1402260652"},
        {image: "images/question.jpg", title: "College Types", description: "This site breaks down the different types of colleges, so you can figure out exactly where you want to go.", link:"http://www.nacacnet.org/studentinfo/articles/Pages/College-Types.aspx"}
      ]
    },
    { heading: "Getting In", paragraph: "What should you do in high school to prepare you for success in college? The links below will help you make the most of your time in high school, while developing academic and extracurricular skills to boost your application.", blocks:[
        {image: "images/extracurriculars.jpg", title: "Extracurriculars and Clubs", description: "Extracurriculars - like clubs, sports teams, performing arts, and part-time jobs - can boost your application. Learn how to choose and leverage extracurriculars here.", link:"https://professionals.collegeboard.com/guidance/prepare/extracurricular"},
        {image: "images/report card.png", title: "Your GPA", description: "Your GPA isn’t the be-all and end-all of your application, but it is important. This site will help you compile your GPA, understand the numbers, and figure out likely, match, and reach colleges.", link:"http://www.petersons.com/college-search/college-admission-requirements-gpa.aspx"},
        {image: "images/college confidential.jpg", title: "College Confidential", description: "College Confidential has comprehensive tips for the application process, including average scores and application standards for specific colleges and universities.", link:"http://www.collegeconfidential.com/"},
        {image: "images/interview.jpg", title: "Admissions Interviews", description: "Doing an admissions interview is a great way to supplement your written application. Prepare to do your best with these tips.", link:"https://bigfuture.collegeboard.org/get-in/interviews/college-interviews-practice-questions-and-strategies"}
      ]
    },
    { heading: "Applications and Supplements", paragraph: "The most daunting part of the college process, the application, is simplified in the links below. Find out when and how to apply, what materials different colleges will want from you, and how to write college essays that stand out.", blocks:[
        {image: "images/commonapp.jpg", title: "The Common Application", description: "Most colleges in the U.S. use the CommonApp, which includes academic information, personal essays, and letters of recommendation. Make an account as an applicant and start filling out the application the summer before your senior year.", link:"http://www.commonapp.org/"},
        {image: "images/essays.jpg", title: "Application Essays", description: "Almost all colleges will request one or more personal essays. Practice on these sample CommonApp essays.", link:"http://blog.commonapp.org/2015/03/31/2015-2016-essay-prompts/"},
        {image: "images/resume.jpg", title: "High School Resume", description: "It can be hard figuring out how to write a resume as a college student, but this graphic will walk you through the process.", link:"http://www.hagerstowncc.edu/sites/default/files/documents/141108-ub-juniors-writing-resume.pdf"}
      ]
    },
    { heading: "Standardized Tests", paragraph: "Most colleges require either the SAT or the ACT as part of their admission process. You may also be taking AP courses and tests and SAT2 tests. Find out when and where to take your standardized tests, and how to best prepare for them. Click 'Request a Practice Exam' in the menu to the right if you would like additional study materials.", blocks:[
        {image: "images/AP.jpg", title: "Advanced Placement", description: "AP tests, usually taken at the end of <strong>junior or senior year</strong>, measure knowledge of specific college-level courses. You don’t need to be enrolled in an AP class to take the test, but see if your school offers AP classes.", link:"https://apstudent.collegeboard.org/home"},
        {image: "images/sat.png", title: "SAT", description: "The SATs are required for admission to most colleges. They measure basic knowledge in math, writing, and reading comprehension, and can be taken multiple times, usually <strong>between Junior ans Senior year</strong>.", link:"https://sat.collegeboard.org/home"},
        {image: "images/satII.png", title: "SAT Subject Tests", description: "While usually optional, SAT subject tests are a great way to show off your knowledge beyond the SATs. It's best to take them<strong> soon after completing the appropriate high school class</strong>.", link:"https://sat.collegeboard.org/about-tests/sat-subject-tests"}
      ]
    },
    { heading: "Financial Aid", paragraph: "The high cost of college can be one its the main roadblocks. Many people know about federal financial aid, but fewer know about the many other ways to pay for college. Though these can seem complex and daunting, the links below will help you make a plan to keep your higher education affordable.", blocks:[
        {image: "images/undocumented.jpg", title: "Financial Aid for Undocumented Students", description: "Financial Aid offers extra challenges for undocumented students. This FAQ will answer all your questions about eligibility, how to apply for aid, and the FAFSA.", link:"https://studentaid.ed.gov/sa/sites/default/files/financial-aid-and-undocumented-students.pdf"},
        {image: "images/documents.jpg", title: "CollegeBoard Institutional Documentation Service", description: "Before allocating aid, some colleges require information about your family's finances via the CollegeBoard's Institutional Documentation Service.", link:"https://idoc.collegeboard.org/idoc/"},
        {image: "images/college board.jpg", title: "College Scholarship Service Profile", description: "A College Scholarship Service profile is required to receive financial aid from most major private colleges and scholarship programs. Submit it in addition to the FAFSA (see below).", link:"https://student.collegeboard.org/css-financial-aid-profile"},
        {image: "images/feeral aid.jpg", title: "FAFSA", description: "You must apply to the Free Application for Federal Student Aid to receive federal aid from any college or university. Get started on this important piece today.", link:"https://fafsa.ed.gov/"},
        {image: "images/finaid.png", title: "Guide to Financial Aid", description: "This site will give you information about options for financial aid beyond scholarships and federal aid. Research these options early, even if you think Federal Aid will cover all your expenses.", link:"http://www.finaid.org/"},
        {image: "images/finaid101.jpg", title: "Financial Aid 101", description: "This site will help you navigate the mainstream financial aid process. It has the tools you need to negotiate with financial aid offices and advocate for yourself.", link:"https://bigfuture.collegeboard.org/pay-for-college/financial-aid"}
      ]
    },
    { heading: "Scholarships", paragraph: "Alongside federal and university financial aid, private scholarships can supplement your college budget. The links below will help you identify which private scholarships you qualify for, and will help you structure your scholarship application process.", blocks:[
        {image: "images/scholarships.jpg", title: "Scholarships for High School Seniors", description: "This database contains hundreds of scholarships for high school seniors. You can sort by amount, deadline, or type (including major, state, athletic scholarships, and more)", link:"https://www.unigo.com/"},
        {image: "images/fastweb.png", title: "Scholarships Searh", description: "The FastWeb lets you find scholarships tailored to your interests, needs, identity, and more. It will also keep you on track by reminding you of deadlines and results.", link:"http://www.fastweb.com/"},
        {image: "images/gates.jpg", title: "Gates Millenium Scholars Program", description: "This program offers renewable scholarships and support for outstanding minority students with significant financial need. It is also committed to increasing minority representation in STEM and healthcare fields.", link:"https://www.gmsp.org/publicweb/aboutus.aspx"},
        {image: "images/buick.jpg", title: "Buick Achievers Scholars Program", description: "The Buick Achievers Scholars Program offers renewable scholarships of up to $25,000 a year to passionate students, especially those interested in STEM fields.", link:"http://www.buickachievers.com/"},
        {image: "images/coca cola.jpg", title: "Coca-Cola Scholars Foundation", description: "Coca Cola offers about 50 scholarships of $20,000 to high-performing high school students each year. Apply at this site.", link:"http://www.coca-colascholarsfoundation.org/"},
        {image: "images/national merit.jpg", title: "National Merit Scholarship", description: "The National Merit Scholarship Program offers scholarships and honors to rising college students nationwide. Apply through this site, by taking the Preliminary SAT/National Merit Scholarship Qualifying Test. Note, must be a citizen or permanent resident to apply.", link:"http://www.nationalmerit.org/nmsp.php"}
      ]
    },
  ];

  $scope.resource  = $scope.resources[$routeParams.resourceId];
  if($routeParams.resourceId==null){
    $scope.resource=$scope.resources[0];
  }

}]);

app.controller('BlogController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.posts = [
      { title: "Blog Post Title",
        author: "Author",
        post: "",
        date: "",
        tags: [
          "", ""
        ]
      }
    ]; 

    $scope.authors = [
      {
        name: "",
        bio: "",
        photo: ""
      }
    ];

    $scope.nextFive = function(index){
      length = $scope.posts.length;
      
    }

}]);



var appApply = angular.module('ApplyApp', ['ngRoute']);

appApply.config(['$routeProvider', function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: '', 
      templateUrl: 'views/mentee.html'
    })
    .when('/mentees', { 
      controller: '', 
      templateUrl: 'views/mentee.html'
    })
    .when('/mentors', { 
      controller: '', 
      templateUrl: 'views/mentor.html'
    })
    .when('/contact', { 
      controller: '', 
      templateUrl: 'views/form.html'
    })
    .otherwise({ 
      redirectTo: '/' 
    }); 
}]);
