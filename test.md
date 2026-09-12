You are a Senior Product Designer, UX Engineer, Senior Full-Stack Next.js Developer, Supabase Architect, PostgreSQL Database Architect, Security Engineer, DevOps Engineer, Accessibility Engineer, SEO Engineer, and SaaS Product Engineer with 10+ years of experience.

You are working directly inside my existing GitHub repository.

Repository:
apteguruji

Your job is to inspect the existing repository first and then BUILD THE COMPLETE APPLICATION.

Do not create a prototype.

Do not create fake CRUD.

Do not create mock backend functionality once Supabase integration is implemented.

Do not unnecessarily rewrite working code.

Preserve useful existing code and improve it where required.

The final application must be production-ready and deployable on Vercel.

==================================================
1. IMPORTANT USER CONTEXT
==================================================

I am not an advanced developer.

Therefore:

- Keep the code understandable.
- Use clear naming.
- Avoid unnecessary abstractions.
- Avoid unnecessary dependencies.
- Add comments only where useful.
- Do not leave unexplained TODOs.
- Do not ask unnecessary questions.
- If something is unspecified, make a professional sensible decision.
- Do not invent credentials.
- Do not invent API keys.
- Do not hard-code secrets.
- Do not expose Supabase service-role keys.
- Never commit secrets.

The application must work well for a small Guruji/religious services business.

The initial deployment should be free-tier friendly.

Preferred infrastructure:

Next.js
Vercel
Supabase
GitHub

==================================================
2. TECHNOLOGY REQUIREMENTS
==================================================

Use:

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Storage
- Row Level Security
- Role Based Access Control

Use Server Components wherever possible.

Use Client Components only where interaction requires them.

Use proper server/client boundaries.

Do not use the Supabase service role key in browser/client code.

Use:

@supabase/supabase-js
@supabase/ssr

Only install dependencies that are actually required.

Before changing package versions, inspect package.json and use versions compatible with the existing Next.js version.

==================================================
3. FIRST TASK — INSPECT EXISTING REPOSITORY
==================================================

Before writing code:

1. Inspect package.json.
2. Inspect the existing app directory.
3. Inspect existing components.
4. Inspect existing lib directory.
5. Inspect existing Supabase utilities.
6. Inspect existing Tailwind configuration.
7. Inspect existing shadcn/ui setup.
8. Inspect existing environment variable usage.
9. Inspect existing routes.
10. Inspect existing Git configuration.

Then determine what already exists.

Do not duplicate existing files unnecessarily.

If a working Supabase client already exists, reuse it.

If an existing design system exists, preserve it and improve it.

==================================================
4. TARGET ARCHITECTURE
==================================================

Use this architecture:

User
 ↓
Next.js App Router
 ↓
Vercel
 ↓
Supabase
 ├── PostgreSQL
 ├── Auth
 ├── Storage
 └── RLS

Supabase must remain the primary source of truth.

Optional future integrations:

Supabase → WhatsApp
Supabase → Google Sheets

Google Sheets must NEVER become the primary database.

Basic click-to-WhatsApp functionality must not require paid WhatsApp Business API.

==================================================
5. PROJECT STRUCTURE
==================================================

Use a clean scalable structure similar to:

app/
  page.tsx

  puja/
    page.tsx
    [id]/
      page.tsx

  sanskar/
    page.tsx
    [id]/
      page.tsx

  shanti/
    page.tsx
    [id]/
      page.tsx

  shraddha/
    page.tsx
    [id]/
      page.tsx

  yag-havan/
    page.tsx
    [id]/
      page.tsx

  vivah/
    page.tsx
    [id]/
      page.tsx

  muhurat/
    page.tsx
    [id]/
      page.tsx

  calendar/
    page.tsx

  festivals/
    page.tsx
    [id]/
      page.tsx

  announcements/
    page.tsx
    [id]/
      page.tsx

  gallery/
    page.tsx

  about/
    page.tsx

  contact/
    page.tsx

  admin/
    login/
      page.tsx

    page.tsx
    puja/
    sanskar/
    shanti/
    shraddha/
    yag-havan/
    vivah/
    muhurat/
    calendar/
    festivals/
    announcements/
    enquiries/
    customers/
    gallery/
    locations/
    guruji/
    users/
    settings/

components/
  ui/
  public/
  admin/
  forms/
  shared/

lib/
  supabase/
  services/
  auth/
  permissions/
  validations/
  utils/

types/

hooks/

services/

utils/

data/

==================================================
6. ENVIRONMENT VARIABLES
==================================================

Use:

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

Do not create fake values.

Do not put secrets into source code.

If server-only secrets are ever required, use a variable without NEXT_PUBLIC_.

Example:

SUPABASE_SERVICE_ROLE_KEY=

But only use this on trusted server-side code when absolutely necessary.

Never expose it to client components.

Create/update:

.env.example

with placeholders only.

Never commit:

.env
.env.local
.env.production

==================================================
7. DATABASE ALREADY EXISTS
==================================================

The Supabase database already contains many tables.

Do not blindly recreate or destroy existing tables.

The existing pujas table is:

CREATE TABLE public.pujas (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  category_id uuid NULL,
  title text NOT NULL,
  slug text NOT NULL,
  short_description text NULL,
  description text NULL,
  benefits text NULL,
  procedure text NULL,
  duration text NULL,
  samagri text NULL,
  image_url text NULL,
  is_featured boolean NOT NULL DEFAULT false,
  is_published boolean NOT NULL DEFAULT false,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now(),
  CONSTRAINT pujas_pkey PRIMARY KEY (id),
  CONSTRAINT pujas_slug_key UNIQUE (slug),
  CONSTRAINT pujas_category_id_fkey
    FOREIGN KEY (category_id)
    REFERENCES puja_categories (id)
    ON DELETE SET NULL
);

Existing indexes:

pujas_category_idx
pujas_published_idx

Existing update trigger:

pujas_updated_at

The actual columns are:

id
category_id
title
slug
short_description
description
benefits
procedure
duration
samagri
image_url
is_featured
is_published
created_at
updated_at

IMPORTANT:

Do not use nonexistent fields such as:

name
name_mr

Use:

title

==================================================
8. DATABASE TABLES
==================================================

The application should support these existing/planned tables:

profiles
roles
permissions
role_permissions

puja_categories
pujas

sanskars

shanti_services
shraddha_services
yag_services
vivah_services
muhurat_services

festivals
festival_programs

schedules

announcements

customers
enquiries

locations

gallery
media

guruji_profile

site_settings

user_roles

If some tables already exist, inspect their actual columns before writing queries.

Do not assume column names for tables other than pujas.

Create migration SQL only when necessary.

Never delete production data.

Make migrations safe to rerun where practical.

==================================================
9. SERVICE ARCHITECTURE
==================================================

All public service categories must be database-driven.

Categories:

Puja
Sanskar
Shanti
Shraddha
Yag/Havan
Vivah
Muhurat

Create reusable service functions.

For example:

getServices()
getServiceById()
getServiceBySlug()

Use typed results.

Handle Supabase errors properly.

Do not silently swallow important database errors.

==================================================
10. PUBLIC WEBSITE
==================================================

Build a premium Marathi religious services website.

Primary language:

Marathi

English can be supported where useful.

Navigation:

मुख्यपृष्ठ
पूजा व विधी
१६ संस्कार
शांती विधी
श्राद्ध व तर्पण
याग / हवन
विवाह व शुभकार्य
मुहूर्त
दिनदर्शिका
गॅलरी
गुरुजींबद्दल
संपर्क

Do NOT put Admin Login in the public navbar.

==================================================
11. HOME PAGE
==================================================

Build:

1. Header
2. Hero
3. Today's Programs
4. Upcoming Programs
5. Calendar Preview
6. Popular Services
7. 16 Sanskar
8. Shanti Vidhi
9. Festivals
10. Announcements
11. Gallery Preview
12. About Guruji
13. Contact/Location
14. WhatsApp CTA
15. Footer

Hero:

भक्ती, श्रद्धा आणि सेवेसाठी एकत्र येऊया

Supporting text:

परंपरेनुसार शास्त्रोक्त पूजा, संस्कार, शांती विधी आणि धार्मिक सेवा.

CTA:

आजचे कार्यक्रम पहा
पूजा / विधीसाठी चौकशी करा

Design must feel:

Traditional Indian spirituality + modern technology.

==================================================
12. SERVICE CATEGORIES
==================================================

पूजा व विधी:

गणपती पूजा
सत्यनारायण पूजा
रुद्राभिषेक
लघुरुद्र
महामृत्युंजय जप
विशेष पूजा
इतर धार्मिक पूजा

१६ संस्कार:

गर्भाधान
पुंसवन
सीमंतोन्नयन
विष्णूबली
जातकर्म
नामकरण
अन्नप्राशन
चौल / चूडाकर्म
उपनयन
१६ संस्कारांची संपूर्ण माहिती

शांती विधी:

नवग्रह शांती
नक्षत्र शांती
जनन शांती
भुवनेश्वरी शांती
उदक शांती
वास्तुशांती
गृहशांती
महामृत्युंजय जप / शांती
इतर शांती विधी

श्राद्ध व तर्पण:

वार्षिक श्राद्ध
महालय श्राद्ध
तर्पण विधी
पितृकार्य
इतर श्राद्ध विधी

याग / हवन:

नवचंडी होम
गणेश याग
सुदर्शन याग
हवन / होम
इतर याग

विवाह व शुभकार्य:

विवाह / लग्न विधी
गृहप्रवेश पूजा
वास्तुशांती
शुभकार्य पूजा
मंगलकार्य विधी
इतर शुभकार्य

मुहूर्त:

विवाह मुहूर्त
गृहप्रवेश मुहूर्त
उपनयन मुहूर्त
नामकरण मुहूर्त
इतर शुभ मुहूर्त
मुहूर्त काढणे

==================================================
13. PUBLIC ROUTES
==================================================

Create:

/
/puja
/puja/[id]

/sanskar
/sanskar/[id]

/shanti
/shanti/[id]

/shraddha
/shraddha/[id]

/yag-havan
/yag-havan/[id]

/vivah
/vivah/[id]

/muhurat
/muhurat/[id]

/calendar

/festivals
/festivals/[id]

/announcements
/announcements/[id]

/gallery

/about

/contact

Every dynamic detail page must:

- Fetch real Supabase data.
- Handle not found.
- Generate metadata.
- Have accessible headings.
- Have loading/error behavior where appropriate.
- Not use fake data.

==================================================
14. INDIVIDUAL SERVICE PAGE
==================================================

For Puja detail page support:

title
short_description
description
benefits
procedure
duration
samagri
image_url

Display:

Service title
Short description
Image
Duration
Samagri
Description
Benefits
Procedure

CTA:

या विधीसाठी चौकशी करा

Pass selected service into enquiry form.

Use slug or ID consistently.

Prefer slug for SEO-friendly URLs if the existing architecture allows it.

Do not break existing routes.

==================================================
15. ADMIN LOGIN
==================================================

Create:

/admin/login

Use Supabase Auth.

Do not create custom password storage.

Do not store passwords in profiles.

Use secure session handling.

Protect every /admin route.

Do not rely on hidden URLs for security.

Unauthenticated users must be redirected to /admin/login.

Authenticated users without permission must receive an appropriate forbidden response/page.

==================================================
16. AUTHENTICATION
==================================================

Use:

Supabase Auth

Implement:

Login
Logout
Session validation
Protected routes
Authenticated user profile

Use secure cookies/session handling appropriate for Next.js App Router.

Avoid client-only authentication protection.

Server-side authorization must be enforced.

==================================================
17. RBAC
==================================================

Roles:

guruji
admin
handler

Permissions:

dashboard.view

puja.view
puja.create
puja.update
puja.delete
puja.publish

sanskar.view
sanskar.create
sanskar.update
sanskar.delete

shanti.view
shanti.create
shanti.update
shanti.delete

shraddha.view
shraddha.create
shraddha.update
shraddha.delete

yag.view
yag.create
yag.update
yag.delete

vivah.view
vivah.create
vivah.update
vivah.delete

muhurat.view
muhurat.create
muhurat.update
muhurat.delete

calendar.view
calendar.create
calendar.update
calendar.delete

festival.view
festival.create
festival.update
festival.delete

announcement.view
announcement.create
announcement.update
announcement.delete

enquiry.view
enquiry.update
enquiry.delete

customer.view
customer.update
customer.delete

gallery.view
gallery.upload
gallery.update
gallery.delete
gallery.publish

location.view
location.create
location.update
location.delete

user.view
user.create
user.update
user.delete

settings.view
settings.update

guruji should have all permissions.

admin should have high-level permissions.

handler permissions must be configurable.

IMPORTANT:

Do not rely only on UI permission hiding.

Enforce authorization on the server and database.

==================================================
18. RLS SECURITY
==================================================

Implement Row Level Security.

Public users may read only published public content.

Private tables must NOT be publicly readable.

Private data includes:

customers
enquiries
profiles
roles
permissions
role_permissions
user management
internal notes

Do not create dangerous policies such as:

USING (true)

for private data.

Create policies based on authenticated users and permission/role checks.

Avoid recursive RLS policies.

If helper PostgreSQL functions are needed, design them carefully to avoid RLS recursion.

Explain security-sensitive SQL in comments.

==================================================
19. ADMIN DASHBOARD
==================================================

Create:

/admin

Dashboard cards:

Total Pujas
Upcoming Programs
Active Festivals
Announcements
New Enquiries
Confirmed Enquiries
Gallery Photos

Also show:

Today's Schedule
Upcoming Programs
Recent Enquiries
Recent Announcements

Keep UI simple and mobile friendly.

==================================================
20. ADMIN SERVICE CRUD
==================================================

Create reusable CRUD architecture.

For every major service module support:

Create
Read
Update
Delete
Publish
Unpublish

Puja form:

title
slug
short_description
description
benefits
procedure
duration
samagri
image
featured
published

Validate forms.

Show validation errors.

Show loading state.

Show success toast.

Show error toast.

Prevent accidental destructive actions with confirmation dialogs.

==================================================
21. CALENDAR
==================================================

Public:

/calendar

Features:

Monthly view
Date selection
Upcoming events
Event details
Time
Location
Category
Status

Admin:

/admin/calendar

Admin controls the same schedule/event data.

Do NOT maintain duplicate calendar databases.

Use the same Supabase source of truth.

==================================================
22. FESTIVALS
==================================================

Create:

/festivals
/festivals/[id]

Admin:

/admin/festivals

Support:

Festival title
Marathi title
Description
Date
Image
Published
Featured

Festival programs should connect correctly to festivals where applicable.

==================================================
23. ANNOUNCEMENTS
==================================================

Public:

/announcements
/announcements/[id]

Admin:

/admin/announcements

Fields should support:

title
content
published
featured
publish date
expiry date if appropriate

Only published announcements appear publicly.

==================================================
24. GALLERY
==================================================

Public:

/gallery

Admin:

/admin/gallery

Features:

Multiple image upload
Drag/drop where practical
Mobile upload
Preview
Upload progress
Category
Title
Caption
Date
Related event
Featured
Publish/unpublish
Edit
Delete

Use Supabase Storage for actual image files.

Use PostgreSQL for metadata.

Validate:

file type
file size

Allow safe image MIME types only.

Do not allow arbitrary dangerous uploads.

Storage buckets:

gallery
puja-images
festival-images
guruji
site-assets

Create secure storage policies.

Do not make private uploads publicly writable.

==================================================
25. ENQUIRY SYSTEM
==================================================

Public form:

नाव *
मोबाईल नंबर *
WhatsApp नंबर
Email
कोणता विधी हवा? *
तारीख
वेळ
ठिकाण
पत्ता
अतिरिक्त माहिती

Submit:

चौकशी पाठवा

Flow:

Website
 ↓
Validation
 ↓
Supabase
 ↓
Customer
 ↓
Enquiry
 ↓
Admin

If the phone number already exists, associate the enquiry with the existing customer when appropriate.

Enquiry statuses:

नवीन
संपर्क केला
निश्चित
पूर्ण
रद्द

Admin can:

View
Edit
Update status
Add notes
Call
WhatsApp
Archive/delete

==================================================
26. CUSTOMER MANAGEMENT
==================================================

Create:

/admin/customers

Support:

Name
Phone
WhatsApp
Email
Address
Notes
Created date

Show enquiry history for customer.

Avoid duplicate customers when possible.

Use normalized database relationships.

==================================================
27. WHATSAPP
==================================================

Add click-to-WhatsApp buttons.

Use prefilled messages.

Example:

नमस्कार गुरुजी,
मला गृहप्रवेश पूजेसाठी चौकशी करायची आहे.

Do not require WhatsApp Business API.

Use a configurable WhatsApp phone number from site settings.

Do not hard-code the number.

==================================================
28. GURUJI PROFILE
==================================================

Create:

/about

Admin:

/admin/guruji

Manage:

Guruji name
Profile image
Biography
Experience
Qualifications
Services
Contact details

Use Supabase Storage for profile image if applicable.

==================================================
29. LOCATIONS
==================================================

Admin:

/admin/locations

Support:

Location name
Address
City
State
Pincode
Google Maps URL
Phone

Public contact page should display appropriate published location information.

==================================================
30. SITE SETTINGS
==================================================

Admin:

/admin/settings

Manage:

Website name
Logo
Phone
WhatsApp
Email
Address
Google Maps
Homepage heading
Homepage description
Footer
Social links

Do not hard-code these values throughout the application.

Use site_settings.

==================================================
31. DESIGN SYSTEM
==================================================

Visual language:

Ivory
Cream
Saffron
Maroon
Deep brown
Subtle gold

Use elegant Indian-inspired styling.

Avoid:

cheap clipart
excessive orange
generic SaaS appearance
excessive gradients
excessive animation

The website should feel:

Premium
Spiritual
Trustworthy
Traditional
Modern

Use generous spacing.

Use readable Marathi typography.

Maintain excellent mobile UX.

==================================================
32. RESPONSIVE DESIGN
==================================================

Mobile-first.

Test layouts for:

Mobile
Tablet
Desktop

Admin must work comfortably on mobile.

Important admin actions:

Enquiries
Calendar
Gallery
Puja
Announcements

must be manageable from a phone.

Use responsive tables/cards where appropriate.

==================================================
33. ACCESSIBILITY
==================================================

Implement:

Semantic HTML
Proper headings
Keyboard navigation
Focus states
Accessible forms
Labels
ARIA only when required
Color contrast
Accessible dialogs
Accessible buttons
Screen reader support

Do not use clickable divs when a button or link is appropriate.

==================================================
34. SEO
==================================================

Implement:

Metadata
Dynamic titles
Descriptions
Open Graph
Canonical URLs
sitemap.xml
robots.txt

Support Marathi SEO.

Use SEO-friendly slugs.

Generate metadata for dynamic pages.

Use appropriate structured data where useful, such as:

LocalBusiness
Person
Service
Event

Do not invent factual information.

==================================================
35. PERFORMANCE
==================================================

Use:

Next.js Image
Server Components
Lazy loading where appropriate
Efficient Supabase queries
Pagination for admin lists
Optimized images
Caching/revalidation where appropriate

Avoid fetching unnecessary columns.

Avoid N+1 queries.

==================================================
36. ERROR HANDLING
==================================================

Implement:

loading states
empty states
error states
toast notifications
form validation
upload errors
authentication errors
404 page
database error handling

Never silently fail.

Log useful server-side errors without leaking secrets.

==================================================
37. SECURITY
==================================================

Follow secure coding practices.

Never:

- expose service role key
- expose database password
- trust client-side role checks
- trust hidden URLs
- store passwords in custom tables
- allow arbitrary file uploads
- expose private customer data
- expose enquiries publicly
- expose internal notes
- use insecure RLS policies

Validate all user input.

Use server-side authorization.

Use RLS.

Use safe database queries.

==================================================
38. DATABASE MIGRATIONS
==================================================

If database changes are required:

Create SQL migration files.

Example:

supabase/
  migrations/

Do not randomly modify production schema.

SQL must be:

- complete
- understandable
- safe to rerun where practical
- non-destructive unless explicitly required

Do not DROP tables.

Do not DELETE existing data.

==================================================
39. TYPESCRIPT
==================================================

Use strict TypeScript.

Do not use:

any

unless absolutely unavoidable.

Create database types where practical.

Keep service types reusable.

Avoid duplicated types.

==================================================
40. UI COMPONENTS
==================================================

Use shadcn/ui where useful.

Use Lucide icons.

Create reusable components for:

buttons
cards
forms
dialogs
tables
badges
empty states
loading states
admin navigation
mobile navigation
service cards
gallery cards
calendar events
enquiry forms

Do not duplicate large UI blocks unnecessarily.

==================================================
41. ADMIN SIDEBAR
==================================================

Create responsive admin navigation.

Items:

Dashboard
पूजा
१६ संस्कार
शांती
श्राद्ध
याग / हवन
विवाह
मुहूर्त
Calendar
Festivals
Announcements
Enquiries
Customers
Gallery
Locations
Guruji
Users
Settings

Only show items the user has permission to access.

Again:

UI hiding is NOT security.

Server authorization and RLS remain mandatory.

==================================================
42. USER MANAGEMENT
==================================================

Admin/Guruji can manage users.

Fields:

Name
Email
Mobile
Role
Permissions

Roles:

Guruji
Admin
Handler

Handler permissions can be individually selected.

Example:

☑ पूजा
☑ Calendar
☑ Enquiries
☑ Gallery

☐ Announcements
☐ Users
☐ Settings
☐ Delete

Do not expose passwords.

Use Supabase Auth for authentication.

IMPORTANT:

Creating/deleting Auth users normally requires privileged server-side functionality.

Never put the service role key in a client component.

If privileged operations are required, implement them safely using server-side code only.

==================================================
43. PUBLIC SERVICE DATA
==================================================

Public pages should query only published records.

For example:

is_published = true

Do not expose draft records.

Featured content should use:

is_featured = true

where appropriate.

==================================================
44. IMAGE HANDLING
==================================================

Use Supabase Storage.

Do not store binary image data inside PostgreSQL.

Store:

Storage object
+
public/signed URL or appropriate URL
+
metadata in database

Use secure upload validation.

For public gallery images, use an appropriate public bucket or signed URL architecture depending on privacy requirements.

==================================================
45. FORMS
==================================================

Use a consistent form architecture.

Validate:

required fields
phone numbers
email
slug
text length
dates
file size
file type

Show Marathi-friendly error messages.

Example:

"कृपया नाव भरा."

==================================================
46. DATA FETCHING
==================================================

Use server-side Supabase access for public server-rendered content where appropriate.

Do not expose database credentials.

Avoid unnecessary client-side fetching.

Use revalidation where appropriate.

==================================================
47. PUBLIC NAVIGATION
==================================================

The public navigation must NOT contain:

Admin
Login
Dashboard

Admin is separate.

==================================================
48. FOOTER
==================================================

Footer should include:

Website name
Short description
Quick links
Services
Contact
Phone
WhatsApp
Location
Copyright

Use values from site_settings where appropriate.

==================================================
49. FREE-TIER FRIENDLY DESIGN
==================================================

Prefer:

Supabase free tier
Vercel hobby/free tier where eligible
GitHub free tier
No paid APIs for core features

Avoid unnecessary background jobs.

Avoid expensive third-party services.

Avoid external image processing APIs unless absolutely necessary.

Clearly document any feature that may incur cost after free limits.

==================================================
50. GITHUB
==================================================

Keep repository clean.

Create/update:

.gitignore
.env.example
README.md

Never commit secrets.

README must explain:

Project setup
Environment variables
Supabase setup
Database migrations
Local development
Deployment
Admin setup
Storage setup

==================================================
51. VERCEL
==================================================

Ensure the application can deploy on Vercel.

Do not assume local-only filesystem.

Do not use persistent local storage.

Do not depend on long-running server processes.

Use Vercel-compatible Next.js architecture.

==================================================
52. SUPABASE AUTH URLS
==================================================

Document that production Supabase Auth configuration needs:

Local URL
Production Vercel URL
Allowed redirect URLs

Do not invent the actual production domain.

Use placeholders in documentation.

==================================================
53. TESTING
==================================================

Before considering implementation complete:

Run:

npm run lint

npm run build

and any existing test command.

Fix TypeScript errors.

Fix lint errors.

Fix build errors.

Do not ignore errors.

Test:

Homepage
Puja listing
Puja detail
All service routes
Calendar
Festivals
Announcements
Gallery
About
Contact
Enquiry
Admin login
Admin dashboard
Admin CRUD
Storage upload
Role permissions
Logout

==================================================
54. IMPORTANT CURRENT PUJA DATA
==================================================

There is already a test row in Supabase:

title:

गणपती पूजा

slug:

ganpati-puja

is_published:

true

is_featured:

false

image_url:

null

The application should correctly display this row at:

/puja

and the detail page at:

/puja/[id]

Do not use:

service.name
service.name_mr

Use:

service.title

==================================================
55. DO NOT CREATE FAKE DATA IN PRODUCTION UI
==================================================

If database data does not exist:

Show an elegant empty state.

Do not show fake dashboard numbers.

Do not show fake enquiries.

Do not show fake customers.

Do not show fake calendar events.

Do not pretend CRUD succeeded if the database operation failed.

==================================================
56. ADMIN CRUD REQUIREMENT
==================================================

When admin CRUD is implemented:

CREATE:
Insert actual Supabase row.

READ:
Read actual Supabase data.

UPDATE:
Update actual Supabase row.

DELETE:
Delete actual Supabase row after confirmation.

PUBLISH:
Update is_published.

FEATURE:
Update is_featured.

Every operation must show:

Loading
Success
Error

==================================================
57. DATA RELATIONSHIPS
==================================================

Use foreign keys where appropriate.

Examples:

customers → enquiries

puja_categories → pujas

festivals → festival_programs

locations → schedules/events where applicable

gallery → related event where appropriate

profiles → auth.users

Do not duplicate the same information unnecessarily.

==================================================
58. ADMIN UX
==================================================

The admin interface should prioritize simplicity.

Guruji should be able to understand:

What needs attention?
What is happening today?
Which enquiries are new?
What programs are upcoming?
What content is published?
What needs editing?

Use:

cards
badges
simple tables
filters
search
pagination

where useful.

==================================================
59. MOBILE ADMIN
==================================================

On mobile:

- sidebar becomes drawer
- tables become cards or horizontal scroll
- forms use one-column layout
- buttons are touch friendly
- image upload is easy
- enquiry actions are easy to tap

==================================================
60. DOCUMENTATION
==================================================

Create a detailed README.md.

Include:

1. Project overview
2. Technology stack
3. Folder structure
4. Environment variables
5. Supabase setup
6. Auth setup
7. Database migrations
8. Storage buckets
9. RLS
10. RBAC
11. Running locally
12. GitHub
13. Vercel
14. Production checklist
15. Troubleshooting

Use simple language.

==================================================
61. FINAL IMPLEMENTATION ORDER
==================================================

Implement in this order:

1. Inspect existing project
2. Fix project structure
3. Fix Supabase utilities
4. Fix public service architecture
5. Implement all public service pages
6. Implement service detail pages
7. Implement calendar
8. Implement festivals
9. Implement announcements
10. Implement gallery
11. Implement about/contact
12. Implement enquiry
13. Implement customer management
14. Implement Supabase Auth
15. Implement protected admin layout
16. Implement RBAC
17. Implement admin dashboard
18. Implement admin CRUD
19. Implement gallery upload
20. Implement user management
21. Implement settings
22. Implement RLS
23. Implement storage policies
24. Implement SEO
25. Implement accessibility
26. Optimize performance
27. Run lint
28. Run build
29. Fix all errors
30. Update README
31. Verify Vercel compatibility

==================================================
62. VERY IMPORTANT — DO NOT STOP AT UI
==================================================

Do NOT just create attractive screens.

Every major feature must be connected to the real backend.

Bad:

Button → console.log()

Good:

Button
 ↓
Validation
 ↓
Server action/API/service
 ↓
Supabase
 ↓
Database result
 ↓
UI update

==================================================
63. IMPORTANT — EXISTING CODE
==================================================

If the repository already contains:

- components
- pages
- styles
- Supabase clients
- utilities

inspect them first.

Do not destroy working functionality.

If something is incorrect, fix it.

If something is incomplete, complete it.

If something is duplicated, consolidate it carefully.

==================================================
64. IMPORTANT — NO SECRETS
==================================================

Never request or invent:

Supabase database password
Service role key
GitHub token
Vercel token
API secrets

Use environment variable placeholders.

If a manual dashboard action is required, document it in README.

==================================================
65. FINAL QUALITY BAR
==================================================

The finished project must feel like a real production SaaS/content-management system for a Guruji.

Public website:

Beautiful
Spiritual
Premium
Fast
Accessible
SEO-friendly
Mobile-first

Admin:

Simple
Powerful
Secure
Mobile-friendly

Backend:

Supabase
PostgreSQL
RLS
Auth
Storage
RBAC

Deployment:

GitHub
Vercel
Supabase

==================================================
66. FINAL VERIFICATION CHECKLIST
==================================================

PUBLIC:

[ ] Homepage
[ ] Navigation
[ ] Services
[ ] Puja details
[ ] Sanskar
[ ] Shanti
[ ] Shraddha
[ ] Yag/Havan
[ ] Vivah
[ ] Muhurat
[ ] Calendar
[ ] Festivals
[ ] Announcements
[ ] Gallery
[ ] About
[ ] Contact
[ ] Enquiry
[ ] WhatsApp
[ ] Mobile responsive

ADMIN:

[ ] Login
[ ] Logout
[ ] Dashboard
[ ] Puja CRUD
[ ] Sanskar CRUD
[ ] Shanti CRUD
[ ] Shraddha CRUD
[ ] Yag CRUD
[ ] Vivah CRUD
[ ] Muhurat CRUD
[ ] Calendar CRUD
[ ] Festival CRUD
[ ] Announcement CRUD
[ ] Gallery upload
[ ] Customer management
[ ] Enquiry management
[ ] Location management
[ ] Guruji profile
[ ] User management
[ ] Permissions
[ ] Settings

BACKEND:

[ ] Supabase connected
[ ] Database
[ ] Relationships
[ ] RLS
[ ] Auth
[ ] Storage
[ ] Storage policies
[ ] RBAC
[ ] Security
[ ] Environment variables

DEPLOYMENT:

[ ] GitHub
[ ] Vercel
[ ] Production environment variables
[ ] Supabase Auth URLs
[ ] Production build
[ ] Mobile testing

==================================================
67. HOW YOU SHOULD WORK
==================================================

Work directly on the repository.

Start by inspecting the existing codebase.

Then implement the application systematically.

After each major implementation group:

1. Summarize what changed.
2. List files created/modified.
3. Mention any required Supabase SQL.
4. Mention any required dashboard configuration.
5. Run validation/build checks.
6. Fix errors before moving forward.

Do not ask me to approve every small step.

Make sensible engineering decisions yourself.

If a manual Supabase/Vercel/GitHub action is unavoidable, clearly document:

STEP X — ACTION REQUIRED

Go to:
[exact dashboard]

Click:
[exact button]

Enter:
[exact value or where to copy it from]

Expected result:
[what I should see]

Never invent account-specific values.

==================================================
68. START NOW
==================================================

First inspect the repository.

Then give me a concise implementation summary.

Then start implementing.

Do not stop at planning.

Build the actual code.
