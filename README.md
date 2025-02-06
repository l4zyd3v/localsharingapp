# File sharing PWA

A PWA that allows you to share files between devices on the same network.

## Core features

#### MVP:

- Upload file(s) and generate a link and QR to share.
- Download the latest file(s) that's been uploaded
- Access previous file(s)

---

## Additional core features

### Expired links

- Let users set an expiration date for the file(s)
- Add a self-destruct feature for the file(s)

### Password-Protected links

- Users can set a password when generating a shareable link
- Require recipients to enter the password to download the file(s)

### File preview

- Allow previewing of image, PDF's, and text files without downloading
- Use a media player for audio and video files

### QR Code sharing

- Generate QR codes for sharing files
- Scanning the code opens the file in the PWW

### Drag & Drop Upload

- Users can drag and drop files into the app to upload them

## Advanced features that might be added

### Local Storage caching

- Store uploaded files locally on the device and sync across devices
- Allow users to view offline files they have previously accessed

### User profiles and permissions

- Users can set visibility (public, private, group access)
- Role-based access: some users can only view/download, while others can upload

### Tagging & Categorization

- Users can tag files for easy searching (e.g., "Work", "Personal", "Videos")
- Implement smart folders that auto-group similar files.

### Activity log & notifications

- Show who uploaded/downloaded which files and when.
- Push notifications when a files is uploaded or about to expire

### Background Uploads & resumable uploads

- If and upload is interrupted, allow resuming later without restarting

## Privacy & Security

### End-to-end encryption

- Encrypt files before they are uploaded to ensure privacy
- Decrypt on download

### Auto-delete after inactivity

- Delete old files that havn't been accessed in a long time
- Allow users to configure retention settings

### Custom domains for sharing

- users can customize shareable links (e.g., `myfiles.com/1234`)
