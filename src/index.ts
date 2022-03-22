/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);

	const nome1:string=jhonatan silva;
	const idade1:number=28;
	const peso1:number=80.20;
	const altura1:number=1.80;
	const ehdev1:boolean=true;
	
	const nome2:string=Jonathan Gonçalves;
	const idade2:number=29;
	const peso2:number=83.50;
	const altura2:number=1.83;
	const ehDev2:boolean=true;
	
	const nome3:string=Paulo Garcia;
	const idade3:number=33;
	const peso3:number=85.50;
	const altura3:number=1.81;
	const ehDev3:boolean=true;
	
	const nome4:string=Eliel Silva;
	const idade4:number=33;
	const peso4:number= 88.50;
	const altura4:number=1.65;
	const ehDev4:boolean=true;
	
	const nome5:string=Danilo Cavalcante;
	const idade5:number=31;
	const peso5:number=82.30;
	const altura5:number=1.75;
	const ehDev5:boolean=true;

	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05
	
});console.log (nome1, idade1, peso1, altura1, ehdev1);
console.log (nome2, idade2, peso2, altura2, ehDev2);
console.log (nome3, idade3, peso3, altura3, ehDev3);
console.log (nome4, idade4, peso4, altura4, ehDev4);
console.log (nome5, idade5, peso5, altura5, ehDev5);

