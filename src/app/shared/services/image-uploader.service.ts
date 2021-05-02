import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { from, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ImageUploaderService {
	constructor(private storage: AngularFireStorage) {}

	uploadImage(image: File, id: string): Observable<URL> {
		const imagePath = `images/${id}`;
		const imageRef = this.storage.ref(imagePath);

		return from(
			new Promise<URL>((resolve, reject) => {
				const task = this.storage.upload(imagePath, image);

				task
					.snapshotChanges()
					.pipe(
						finalize(() =>
							imageRef.getDownloadURL().subscribe(
								(res) => resolve(res),
								(err) => reject(err)
							)
						)
					)
					.subscribe();
			})
		);
	}
}
