
//bannerRotate displays sentences for the banner element
//Normalization section = [0 - 16]; 
//Database and DBMS [17-22]
//Relational DB and Algebra [23-]
//PL & SQL [31]
//Triggers [37]
//Oracle Architecture [47]
function bannerRotate(increment, index) {
		var bannerSentencesFront = [ 
	//ICS212 normalization 
		"Normalization Chapter"
		, "What is definition of Normalization?"
		, "What are the features of normalized relations?"
		, "What are some benefits of using a normalized database?"
		, "What are three types of update anomalies?"
		, "How would you describe a 'functional dependency' between attributes?"
		, "What is the determinant in a functional dependency?"
		, "How would you describe a transitive dependency?"
		, "What steps should you follow to identify a primary key for a relation?"
		, "How can you tell if a relation is in 0NF, aka Unnormalized?"
		, "What is the first thing you should do when dealing with data that is in 0NF?"
		, "How can you tell if a relation is in 1NF, aka First Normal Form" 
		, "What 3 steps can you follow to transform data 0NF to 1NF- 'flatten' the table?"
		, "How can you tell if a relation is in 2NF, aka Second Normal Form?"
		, "What 3 steps can you follow to transform a 1NF relation to 2NF" 
		, "How can you tell if a relation is in 3NF, aka Third Normal Form"
		, "What 3 steps do you take to transform a 2NF relation to 3NF?"
		
	//ICS212 Database and DBMS 17
		, "Database and DBMS Chapter"
		, "What is the difference betweeen DDL and DML"
		, "Describe the relationship between logical and physical transaction operations"
		, "What does A in ACID mean?"
		, "What does C in ACID mean?"
		, "What does I in ACID mean?"
		, "What does D in ACID mean?"
		, "How is data integrity ensured in a DBMS."
		, "What can a DBA use to ensure data security?"
	//ICS212 Relational DB and Algebra 26
		, "Relational DB and Algebra Chapter"
		, "What 5 primitive operations can be used to combine tables."
		, "What is a selection?"
		, "What is a projection?"
		, "What is a union?"
		, "What is an intersection?"
		, "What is a Difference?"
		, "What is a Cartesian Product?"
	//ICS212 SQL & PL/SQL 34
		, "SQL and PL/SQL Chapter"
		, "Why is it important for a DBA to have knowledge of SQL?"
		, "What is a 'railroad' diagram."
		, "What are the criticisms of SQL?"
		, "What structure does PL/SQL follow?"
		, "What keywords does PL/SQL use?"
		, "What is a cursor?"
	//ICS212 Triggers 40	
		, "Triggers Chapter"
		, "What is a trigger?"
		, "What is the difference between a DML Trigger and a System Trigger?"
		, "What are Triggers used for?"
		, "What are the difference between Constraints and Triggers?"
		, "What are some triggering events used for a trigger"
		, "What does BEFORE/AFTER mean in a trigger?"
		, "What does the level clause indicate in a trigger?"
		, "What is a restriction on a trigger?"
	//ICS212 Oracle Architecture 49	
		, "Oracle Architecture Chapter"
		, "What is the difference between an instance and a database?"
		, "What components does the instance consist of?"
		, "What is the Instance SGA?"
		, "What 3 areas is the Instance SGA divided into?"
		, "What is a latch?"
		, "What is the SGA DB Buffer Cache?"
		, "How is memory managed in the DB Buffer Cache?"
		, "What components make up the SGA Shared Pool?"
		, "What is the SGA Redo Log Buffer Responsible for?"
		, "What other pools are in the SGA?"
		, "What is the instance PGA?"
		, "What is a background process?"
		, "What is the System Monitor?<br>SMON"
		, "What is the Process Monitor?<br>PMON"
		, "What is the Database Writer?<br>DBWn"
		, "What is the Log Writer?<br>LGWR"
		, "What is the Archiver?<br>ARCn"
		, "What is the Checkpoint?<br>CKPT"
		, "What do the control files do?"
		, "What do the Redo Log Files take care of?"
		, "What are the data files?"
		, "How do data files use data blocks?"
		, "What is an extent."
		, "What components are memory structures?"
		, "What components are Process Structures?"
		, "What components are Storage structures?"
		//77//////////////////////////////////////////////////
		, "Planning Chapter"
		, "What options does Oracle provide for licenses, and what is the cost?"
		, "Describe the Express Edition of Oracle."
		, "Describe the Standard Edition of Oracle."
		, "Describe the Enterprise Edition of Oracle."
		, "What is the dedicated server architecture?"
		, "What is the shared server architecture?"
		, "What is a dispatcher process."
		, "What is connection pooling architecture?"
		, "What are Real Application Clusters, RAC"
		, "What is a Standby Database?"
		, "What is maximum available architecture?"
		, "What are three factors to consider when determinng sizing?"
		, "What are 4 sizing areas to consider?"
		, "When determing the disk size, what 5 things do you need to consider?"
		, "How do you calculate the space required for Data Files?"
		, "What size should you set aside for Control Files and Online Redo Logs?"
		, "How much space for Archived Redo Logs."
		, "How much space for Backups, Exports, Exec"
		, "What are the RAID layouts and how do they affect disk space?"
		, "What is the rule of thumb for CPU sizing?"
		, "What is the TNSNAMES.ORA file?"
		]; 
		 var bannerSentencesBack = [ 
		" "
		, "Normalization is the process used to design a set of suitable relations that meet a company's data requirements."
		, "They will have minimal number of attributes, closely related attributes will be in the same relation, and each attribute will be represented once(except for foreign keys)."
		, "Reduced update anomolies through eliminated data redundancy, data will maintain it's integrity, and will require minimal storage."
		, "Insertion, Deletion, Modification"
		, "If A and B are attributes of a relation, B is functionally dependent on A, if each value of A in R is associated with exactly one value of B in R. Represented as A -> B"
		, "The determinant refers to the attribute upon which the other attribute depends. For example, if A -> B, A would be the determinant."
		,  "If A -> B, and B -> C, then C is transitively dependent on A via B."
		, "To identify candidate keys, identify the attribute or grouping of attributes that create functional dependencies in the relation, that will uniquely identify each tuple in the relation. The determinants of these tuples can become primary keys."
		, "The table contains one or more repeating groups, non-atomic data, non-functional dependencies, transitive dependencies"
		, "If it is not already in a table format, you should transform the data from the information source into a table format with columns and rows, each intersection containing only 1 piece of data."
		, "The relation will contain only atomic data, each intersection of a column and row will contain 1 piece of data. The relation will still have non-functional and transitive dependencies."
		, "1. Nominate an attribute as a key <br>2. Identify repeating groups <br>3. Move repeating groups along with a copy of the original key attribute into a new relation."
		, "A relation that is in 1NF, with all non-key attributes fully functionally dependent on any candidate key."
		, "1. Identify the 1NF primary key. <br>2. Identify functional dependencies in the relation. <br>3. If you find partial dependencies move them into a new relation, along with a copy of their determinant(PK/FK)"
		, "The relation will be in 1NF & 2NF, and no non-key attributes will be transitively dependent on any candidate key."
		, "1. Identify the PKs <br>2. Identify the functional dependencies<br> 3. If you identify transitive dependencies, move them into a new relation with a copy of their determinant(PK/FK)"
		, ""//17//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		, "DDL is used to define data types, structures and constraints. DML is used as a query language of the data."
		, "A transaction may involve multiple logical operations, each of which may require multiple physical operations. 1 logical creates many physicial."
		, "Atomic = If any part of a tx fails, then the entire tx is failed, this is controlled by commit and rollback."
		, "Consistent= A tx will not affect another user's view of the data until it is complete."
		, "Isolated=Concurrently occuring TX will not interact to produce incorrect results."
		, "Durable=Once a TX is confirmed, the result must be permanent."
		, "The following constraints are used to enforce integrity: <br>-Check (rules on data values)<br>-Uniqueness(PKs) <br>-Referential(FK)"
		, "Usernames and passwords, privileges within a schema, views and query modification to restrict the portions of a table can be seen or modified."
		, " "//26//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		, "Selection<br>Projection<br>Union<br>Difference<br>Cartesian Product"
		, "A temporary table is formed by extracting a subset of rows, or horizontal slices."
		, "A temporary table is formed by extracting a subest of columns, or vertical slices."
		, "A temporary table is formed by selecting ALL rows from two tables, <b>eliminating duplicates</b>. Symbol is: U.<br> A = 1, 2, 3, 4<br>B = 2,3<br> A U B = 1,2,3,4 "
		, "A temporary table is formed by selecting <b> only the duplicates </b> from two tables. Symbol is: n<br> A = 1, 2, 3, 4<br>B = 2,3<br> A n B = 2,3"
		, "A temporary table is formed by extracting only those rows from one table that <b>do not occur</b> in the second table.<br> A = 1, 2, 3, 4<br>B = 2,3<br> A - B = 1, 4 "
		, "A table is formed by concatenating every record from two tables of interest, each row is matched, and all columns are displayed. R*R, C+C"
		, " "//34//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		, "The greatest opportunity for performance optimization is in the application layer where queries originate, rather than in the database or it's environment."
		, "The railroad diagram is used in SQL documentation to describe the control flow of syntax. Capsule shapes are mandatory, squares are optional, optional tracks are shown as lines."
		, "SQL allows violations of relational principles, by allowing duplicate rows, allows data redundancy, allows nullable values (which violates binary logic)."
		, "PL/SQL is a block strucutred language, blocks can be anonymous(run in prompt) or named(compiled and saved)."
		, "DECLARE- create variables, cursors, types <br>BEGIN-logic, loops, SQL statements<br>EXCEPTION-Error handling<br>END-closes the block<br> three block sections: Declarative, Executable, and Exception Handling."
		, "A cursor is a structure created in PL/SQL that fetches a result set, and provides an iterator to return the results row by row."
		, " "//41//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		, "A trigger is a procedure, that is attached to a table, and specifies an event to 'listen' for on the table. Event can be a system event or DML statment. When the event occurs, the trigger 'fires' and executes statements."
		, "A DML trigger is created on a view or table (DML statements Insert, Update, Delete)<br>A System Trigger is created on a schema or the database (DDL statements)"
		, "Triggers can be used to automatically generate derived column values, log events, gather table access statistics, modify table data in response to DML statements, prevent unauthorized DML operations/transactions, enforce complex business rules that cannot be handled by constraints."
		, "Trigger applies to new data generated only, while a constraint can apply to new data, or to both new and existing data<br>Constraints are less complex, but Triggers can enforce complex business rules that constraints cannot."
		, "Events include: insert, update, delete, create, alter, drop, database shutdown or start up, an error message, or user logon/logoff."
		, "Before/After specifies the timing of the trigger, and tells Orarcle to fire it before or after statement execution"
		, "The level the trigger will report on, can be once for a statement level or once for each row affected by a statement."
		, "A trigger restriction, such as a where condition that must be true for the trigger to fire."
		, " "//50//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		, "An instance refers to active processes and the memory areas they share. Database refers to the data files saved on disk."
		, "The instance uses the PGA, SGA, and Background Processes."
		, "The SGA - System Global Area - is a very large memory area shared by <b>all</b> oracle processes."
		, "Buffer cache<br>Shared pool<br>Log buffer."
		, "The latch is an interprocess communication mechanism that oracle processes use to coordinate their access to SGA areas."
		, "The DB Buffer Cache is usually the largest portion of the SGA, and helps with DB efficiency. It is used to cache blocks of data, and when a process needs a data block, the buffer cache is checked first."
		, "The buffer cache maintains memory through a <b>keep pool</b>, which caches frequently used data, and the <b>recycle pool</b>, where less used data will be stored. When filled up, the least-recently-used are removed."
		, "<b>Data Dictionary</b> cache, which stores info from the data dictionary<br><b>Library Cache</b> stores query execution plans for re-use."
		, "The Redo Log buffer is a queue of undo and redo entries; the log writer periodically copies accumulated entries into the redo log file."
		, "Streams pool, Java Pool, and Large Pool"
		, "The Instance PGA - Program Global Area - is a process used by every connection to the database, and checks permissions, generates query execution plans, retrieves data blocks into the buffer cache, creates undo/redo entries."
		, "The background Processes operate independently of users, and are active from startup to shutdown. Lives in the instance as a background process."
		, "The System Monitor is a background process that is responsible for cleanup, using redo logs, after abnormal shutdown, and does routine space management during normal operation."
		, "The Process Monitor watches the server processes. If it finds failed processes, it terminates them properly and releases associated resources. Lives in the instance as a background process."
		, "The Database Writer is responsible for transferring all modified data blocks in buffer cache to data files. Lives in the instance as a background process."
		, "The Log Writer is responsible for transferring all undo and redo entries in the log buffer to the redo log files. Lives in the instance as a background process."
		, "The Archiver makes copies of redo log files to less immediate storage when they fill up. The copies are needed if a data file is damaged and needs to be repaired.  Lives in the instance as a background process."
		, "The checkpoint handles synchronizing data cache to data files, which allows the DBWR do work in batches. Does this by timestamping file headers with SCN"
		, "Control Files live in the database, and contain information about the database like, setting, names and locations of files. It is continuously updated during DB operation, and multiple copies are maintained in sync."
		, "The Redo Log Files ensure that transactions are durable. Prior to writing to a data file, the log writers storesa copy of the old data and the new data in the redo log file. The redo files enable rollback of uncommitted tx, and verify any changes."
		, "Data files are where content is actually stored, and are logially grouped into tablespaces."
		, "Data File space is organized into data blocks(pages) of equal size (8KB is common), and each block contains data from just one table. All data files in one tablespace use blocks of the same size."
		, "If a table needs more space, it will take a contiguous range of data blocks, called an extent."
		, "Memory Structures include the SGA (Database buffer cache, redo buffer, and various pools), and the PGA."
		, "Process Structures include user process and server process, and background processes(SMON, PMON, DBWn, CKPT, LGWR, ARCn etc)"
		, "Storage Structures include<br>Logical<br>	-(Database, schema, tablespace, segment, extent, and oracle block)<br>Physical<br>	-(Data files, control files, and redo log files."
		, " "//77//////////////////////////////////////////////////
		, "Oracle provides Licenses that are free to download and use until the software is used commercially. Available as Express Edition, Standard Edition, Enterprise Edition."
		, "Express is<br>-Free<br>-provides alot of db functionality<br>-db cannot be > 4GB<br>-Easy to deploy"
		, "- No restrictions on db size, but server cannot exceed 4 cpus<br>-Not suitable for large db<br>-RAC permitted"
		, "- Suitable for largest and most demanding DB<br>-features parallel query, query results caching, parallel backup/recovery<br>-Costs ALOT<br>-doesn't include all features"
		, "It is the simplest and most common configuration, in which each connection is handled by a dedicated foreground process in the instance."
		, "The shared server is used by many OLTP systems, that have alarge number of connections, small queries and low processing. Shared foreground processes. Clients communicates with a dispatcher process."
		, "The displatcher places requests to the db on a request queue, available proceses handle the request, and places results on a response queue. Dispatcher communicates reseults to the user. State information that may be needed for next request is stored in the SGA."
		, "Connection pooling is ideal for stateless e-commerce apps, and is more efficient than the shared server. Database Resident Connection Pooling is newin Oracle 11g."
		, "RAC allows two or more instances on separate CPUs to connect to a single Oracle db. It can scale out by adding more instances on cheap computers, and has a big impact on availability."
		, "Standby Databases improve application availability, redo info is shipped to a 'standby' db, and in the event of a primary db outage the standby can be used. Data Guard can automate and simplify standby db. Can use active-active config of two r more computers." 
		, "Maximum available architecture combines RAC with standby and uses identically configured primary and secondary sites,and can be extended to the application tier." 
		, "Nature of Application (OLTP vs OLAP)<br>Expected amount of activity<br>Performance targets"
		, "Disk, Memory, CPU and Network."
		, "Data Files, Control Files, Online Redo Logs, Archived Redo Logs, Backups and Exports, Software Executables and Related Files."
		, "Tables: Average size of each row * number of rows<br>Indexes: double table space<br>Overhead/Whitespace: double table + index"
		, "2GB is sufficient, and placement of the files can make OLTP more efficient."
		, "Redo log space depends on the amount of activity in the database and retention preferences. OLTP db would require space equal to size of datafiles."
		, "Backups need an area twice the size of the database<br>Software Exec require 4 GB"
		, "RAID layouts are used for data protection<br>RAID 10, which has mirroring and striping, reduces the usable space by 50%, and is best choice for DB<br>RAID 5 has most usable space,but reduces write performance"
		, "As many CPUs as the average number of concurrent active sessions during high workload."
		, "It is a configuration filethat maps net service names to connect descriptors. Net service is an alias to a db network addr. A connect descriptor contains the location of the listener. Clients and db servers use the net service name when connecting with an app."
		];

	if (increment == 0) {
		var currentSentenceF =  document.getElementById("textFront");
		var currentSentenceB =  document.getElementById("textBack");
		
		currentSentenceF.innerHTML = bannerSentencesFront[index];
		currentSentenceB.innerHTML = bannerSentencesBack[index];
	}
		
	else {	
		var currentSentenceF =  document.getElementById("textFront");
		var currentSentenceB =  document.getElementById("textBack");
		
		var sentenceF = currentSentenceF.innerHTML;
		var sentenceB = currentSentenceB.innerHTML;
	
		var incrementedIndex = bannerSentencesFront.indexOf(sentenceF);
		incrementedIndex += increment;
	
		if (incrementedIndex > bannerSentencesFront.length-1){
			incrementedIndex = 0;
		}
		if (incrementedIndex < 0){
			incrementedIndex = bannerSentencesFront.length-1;
		}

		currentSentenceF.innerHTML = bannerSentencesFront[incrementedIndex];
		currentSentenceB.innerHTML = bannerSentencesBack[incrementedIndex];
	}
}
