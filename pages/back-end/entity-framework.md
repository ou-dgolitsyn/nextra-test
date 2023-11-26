# Entity Framework Code First

<!-----

You have some errors, warnings, or alerts. If you are using reckless mode, turn it off to see inline alerts.
* ERRORs: 0
* WARNINGs: 0
* ALERTS: 11

Conversion time: 2.975 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β34
* Thu Nov 09 2023 10:57:47 GMT-0800 (PST)
* Source doc: DQApp_Final
* This document has images: check for >>>>>  gd2md-html alert:  inline image link in generated source and store images to your server. NOTE: Images in exported zip file from Google Docs may not appear in  the same order as they do in your doc. Please check the images!

----->


<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 0; ALERTS: 11.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p><a href="#gdcalert1">alert1</a>
<a href="#gdcalert2">alert2</a>
<a href="#gdcalert3">alert3</a>
<a href="#gdcalert4">alert4</a>
<a href="#gdcalert5">alert5</a>
<a href="#gdcalert6">alert6</a>
<a href="#gdcalert7">alert7</a>
<a href="#gdcalert8">alert8</a>
<a href="#gdcalert9">alert9</a>
<a href="#gdcalert10">alert10</a>
<a href="#gdcalert11">alert11</a>

<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>




1. How to build and run DQApp

**To get access to DQApp DB’s you need to run this application ONLY from FKH AVD.**



    1. Clone project source code from  \
[https://github.com/firstkeyhomes/FirstKey.DQ](https://github.com/firstkeyhomes/FirstKey.DQ)
    2. Open project in Visual Studio and restore all packages.
    3. To get FKH special NUGET packages you will need to add the following settings in Nuget Packages for Solution:
        1. Open Manage Packages for Solution window \


<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")

        2.  Open options window \


<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")

        3. Add new Package source:



<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")




        4. Change new source settings to following: Name = FirstKeyHomes, Source = [https://pkgs.dev.azure.com/FirstKeyHomes/_packaging/FirstKeyHomes/nuget/v3/index.json](https://pkgs.dev.azure.com/FirstKeyHomes/_packaging/FirstKeyHomes/nuget/v3/index.json)
        5. Hit the Update button.
        6. Close the Options window.
    4. Restart Visual Studio and open DQApp project.
    5. Build a solution and run it.
2. The Code First Approach in DQ App Overview
    6. Overview

DQApp historically used a lot of different data sources to provide its functionality to end users. Some of those DB’s were managed from DQApp – internal DB’s, and some of them not – external DB’s. All previous implementations of DQApp used Database-First Approach, but we decided to use modern Code-First Approach when started to re-create DQApp from the beginning.

Right now, DQApp using the following DB’s:



* DQ – main internal DB.
* BLTYardi – main external DB, which contains all information about tenants, properties, bills and etc.
* EDW – additional external DB, which contains information about work orders and some dictionaries from other FKH systems.
* HUB – additional external DB, which contains information about FKH customer support systems.
* Sandbox – additional external DB, which contains a bunch of various information from other FKH system. Currently used for getting Eviction information, but in previous implementation usage was much wider. 
    7. Benefits of Code-first approach

Why should you keep using Code-First in DQApp? The answer is pretty simple: Code-First is a modern and easy solution for creating, maintaining, and managing your database without the need for any SQL strings or external tools like DataGrip or SSMS. Using the Code-First in any project will provide you at least the following benefits:



* Clean, easily maintainable data model.
* Ease and speed of managing the database schema.
* Absence of data redundancy.
* Simplicity of modifying existing functionality.
* Ease and speed of implementing new functionality.
* Application support simplicity.
* Increased application performance.
* Utilization of modern approaches and architecture.
* Ease of onboarding new developers into the project.
    8. How the existing stored procedures were translated to code first
3. External Azure functions and scheduled updates

DQ App using the YardiDB as a source of truth when we need to get actual information about Property, Tenants, Payments and other things. But some of the current requests are extremely heavy to be implemented as a real-time process. For evaluation those request was created a special project FirstKey.DQ.AzureFunctions ([https://github.com/firstkeyhomes/FirstKey.DQ.AzureFunctions](https://github.com/firstkeyhomes/FirstKey.DQ.AzureFunctions)).

FirstKey.DQ.AzureFunctions should prevent the overloading of the YardiDB. This project contains Azure Functions which should trigger update API in DQApp by schedule. Currently we have the following processes:



* DailyRefresh – update information about: Tenants, CallPriority, DailyAssignments, ProcessExceptions. Should be triggered every 3 hours.
* DemandLetters – update information about Eviction Cases. Should be triggered every hour.
4. How to work with DQApp DQContext
    9. How to change or update models
        7. _ _To change or update models – just change the source code in necessary files. All changes will be tracked when you generate a migration. After each change in model classes, you need to re-generate new migration. 
        8.  If you need to specify relationships between entities – use this [manual](https://learn.microsoft.com/en-us/ef/core/modeling/relationships).
        9.  If you need to specify additional data or settings for entity - use this [manual](https://learn.microsoft.com/en-us/ef/core/modeling/relationships).
    10. How to generate migration
        10. Re-build the DQApp solution.
        11. Go to the Package Manager Console and use the following command:
        12. You can change context or environment if you need it, just change parameters value in command. This command will generate a new migration file in Migrations folder and change data in DQContextModelShapshot.



<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")




        13. You can add additional code or logic to this file, but  \
**DON’T change anything from auto-generated code!!! It could break the whole migration. **
    11. How to change branch of the migration

Did you accidentally create a migration in the wrong branch?  \
Don’t bring this snapshot or migrations changes into the right branch! 

Do the following:



        14. Remove migration using command:
        15. Switch to normal branch and bring necessary changes to it.
        16. Generate a new migration.
    12. How to apply migration
        17. Normally all migration will be applied automatically when you start the project. If you don’t want it – comment the following peace of code in Program.cs: 



<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image5.png "image_tooltip")




        18. If you want to apply your migration to specific environments manually – use the following command:
        19. By the default it will apply to the last migration. If you need to specify migration when just add migration name to the command:
        20. If you want to revert last applied migration – use the following command:
    13. How to create stored procedure
        21. Create a new  .sql file in DQApp.Data – folder StoredProcedures in any of DB folders:



<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image6.png "image_tooltip")




        22. Go to created file and write any SQL code for your stored proc:



<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image7.png "image_tooltip")




        23. Save changes and open file Properties



<p id="gdcalert8" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image8.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert9">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image8.png "image_tooltip")




        24. Set `Build Action` to `Embedded resource` and `Copy to Output Directory` to `Copy always`.
        25. From now on this stored procedure is ready to be a part of migration for target DB. Create an empty migration file using the command `add-migration` (empty migration generate only if model wasn’t changed!) 
        26. To go the created migration file and add the following peace of code to the Up() method:
        27. This code will automatically apply all .sql files from embedded resources. If you need to update only one – set correct file name here:
        28. Don’t forget to drop your stored procedure in case of revert migration! Add this code to the Down() method:
    14. How to update stored procedure
        29. To update stored procedure – just make necessary changes in .sql file and do the next steps
        30. Create an empty migration file using the command `add-migration`.
        31. To go the created migration file and add the following peace of code to the Up() method:
    15. How to add\update\delete data

Code first approach gives us a lot of different ways to manipulate data in your DB. The most common changes should be done by users via UI, but if you really need to do change something directly in DB you can use some the following opportunities:



        32. Initialize empty DB with necessary data from existing DB using the DBInitializer class. Simply add your logic in static methods using the right context (DQContext usually).
        33. Create a separated .sql file and write all SQL-scripts there, then just use this file in the empty migration doing the same steps as for stored procedures.
        34. Use EF internal data seeding way and read this [manual](https://learn.microsoft.com/en-us/ef/core/modeling/data-seeding).
        35. For SQL lovers - use raw SQL and add all logic to code in migration file: 



<p id="gdcalert9" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image9.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert10">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image9.png "image_tooltip")




5. How to work with other DQApp contexts
    16. How to add new Model class to DQApp from existing DB

DQApp using a lot of DB’s to get information from different resources. Each of those DB’s must have standalone context class, which will be used by EF to create requests.

All external DB’s should be used only in READONLY mode, so don’t try to create or add something to those DB’s.

All external DB’s maintained by other teams and models (or schemas could) be changed in any moment. In this case you will need to update local context or model files in DQApp project. EF will provide you with all necessary information in Exception messages.

DQApp normally using ONLY the necessary models for entities from external DB’s. If you need to add new model for some of entities from external DB just do the following steps:



        36. Go to the Package Manager Console and use the following command:
        37. It will create a model for all Tables from your Command in YardiDatabase directory (in this example – only 1 table PMDOCS).
        38. Move Pmdocs.cs file from YardiDatabase directory in DQApp.Web solution to DQApp.Data solution. Normally it should be DQApp.Data/YardiModel/Models direction. Don’t forget to change namespace in Pmdocs.cs file.
        39. Go to YardiDatabase directory in DPApp.Web solution, find YardiContext.cs, copy all sensitive data from it into the YardiContext.cs in DQApp.Data. Normally it should be DbSet info and part of OnModelCreating() method.
        40. Delete YardiDatabase folder from DQApp.Web

**You can find more information about scaffolding in this [manual](https://learn.microsoft.com/en-us/ef/core/managing-schemas/scaffolding/?tabs=dotnet-core-cli).**



    17. How to add new DBContext to DQApp
        41. All DQApp DB’s (external or internal managed) should have their own context class in DQApp.Data project.
        42. Each of those contexts must have their own connection strings in ALL appsettings.xxx.json files.
        43. Each of those contexts must be injected into ASP.NET DI  standard system via standalone configuration. For example:  

        

<p id="gdcalert10" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image10.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert11">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image10.png "image_tooltip")


        44. After configuration is done, you can use DBContext classes as usual via standard DI.
        45. For all requests to external DB’s you should use AsNoTracking() chaining-method.
6. Main rules and agreement for happy developing
* Changing data (insert, delete, update rows) in DB tables is normal.
* **Don’t even think about making any changes with DB schema (tables or columns or links or whatever) directly in DB using SSMS or some other tools. **
* Do you want to change something in DB schema? Go to the source code.
* If you added something manually to Up() method in the migration file -  don’t forget to white a code to revert your changes from DB in Down() method.
* To add/update/delete stored procedures you should create standalone migration file.
* Need to do some small data update in DB, but don’t want to create migrations for this (especially for lower environments)? Then create a SQL-script and ask DevOps to run this script after deployment.
* All DB, which are not managed from DQApp – should be used ONLY in READONLY mode.
* All changes to DQApp managed DB’s should be made ONLY from DQApp Solution.
* If you changed the timeout to DB’s in method (in case longtime execution) – don’t forget to change it back after it’s no more necessary.
7. Possible issues
    18. Applying migrations with stored procedures code from some environment to PROD.

**Why it happens?** This could happens when a HOTFIX change the model, but OTHER environments don’t know anything about it or when stored procedures code in the migration trying to work with outdated model (for example: model was changed in another migration, but timelines for migration was BEFORE  timelines for stored procedure).

**How to fix that?** Just do the steps from paragraph 7. When you will be sure about the reason, then:



        46. Delete files with problem stored procedure migration from the `Migrations` folder.
        47. Create new empty migration for conflicting stored procedures.
        48. Add template code for stored procedures migration into the newly generated file.
        49. Change connections string for DQ DB, which is safe for changes. (If you don’t have this, just ask DevOPS to create new one)
        50. Try to run the project in test environment DB.
        51. Create a merge request with those changes (don’t forget to reset connection strings in appsettings.XXX.json)
        52. Wait till the automatic deployment is done.
    19. Migrations conflicts

**Why it happens?** Sometimes you encounter a conflict when merging the model snapshot model (for example: you and your teammate may each have renamed the same property)

**How to fix that?** Just figure out which changes should be merged in current branch and then:



        53. Abort the merge and rollback to your working directory before the merge.
        54. Remove your migration (but keep necessary model changes).
        55. Merge your teammate's changes into your working directory.
        56. Re-add your migration.
    20. Other migrations problems

If you have any problem with migrations in some environment just do the following steps:



        57. Switch to the branch, which has a problem.
        58. Go to the appsettings.local.json file and change connection string for necessary DQ DB environment (where you have a problem with migration):



<p id="gdcalert11" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image11.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert12">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image11.png "image_tooltip")




        59. Re-build the DQApp solution.
        60. Go to the Package Manager Console and use update-database command.
        61. Package Manager Console will show you all debug information and if those info is not enough for you – just follow the instructions from console, it will give you much more information.