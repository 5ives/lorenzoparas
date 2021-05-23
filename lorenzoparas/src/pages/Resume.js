import "../App.css";
import { Document, Page, pdfjs } from 'react-pdf';
import LorenzoParasResume from '../files/LorenzoParasResume.pdf';
import React from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
	return (
		<div class="container">
			<div class="sub-container">
				<div class="title">
                    <h1>resume</h1>
                </div>
				<div id="resume">
					<Document file={LorenzoParasResume}>
						<Page pageNumber={1} />
					</Document>
				</div>
			</div>
		</div>
	);
}

export default Resume;