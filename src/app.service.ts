import { Injectable } from '@nestjs/common';
import * as Papa from 'papaparse';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHealthCheck(): string {
    return 'OK!';
  }

  getCdr(tn: string): string {
    console.log('Fetching CDRs for:', tn);

    const filePath = path.join(
      __dirname,
      '..',
      'data',
      'EXTENDED_MOCK_DATA_WITH_DUPLICATES.csv',
    );

    // Read the CSV file
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Parse the CSV file
    const parsedData = Papa.parse(fileContent, {
      header: true,
      skipEmptyLines: true,
    });

    // Find all records with the matching tn in to or from
    const matchingRecords = parsedData.data.filter((record) => {
      return record.to === tn || record.from === tn;
    });

    console.log(`Found ${matchingRecords.length} records for ${tn}`);

    return matchingRecords || [];
  }
}
