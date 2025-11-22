import { useEffect, useState } from 'react'

/*
  Firebase Placeholder Component
  - Shows how you will wire up Firestore later
  - Does NOT require billing; uses Firestore (the free plan is fine for small reads)
  Steps to enable later:
  1) Add env vars: VITE_FIREBASE_API_KEY, VITE_FIREBASE_AUTH_DOMAIN, VITE_FIREBASE_PROJECT_ID, VITE_FIREBASE_APP_ID, etc.
  2) Install firebase (already added), then uncomment the imports and code below.
*/

// import { initializeApp, getApps } from 'firebase/app'
// import { getFirestore, doc, getDoc } from 'firebase/firestore'

export default function FirebasePlaceholder() {
  const [status, setStatus] = useState('Waiting to connect to Firestore...')
  const [sample, setSample] = useState(null)

  useEffect(() => {
    // Example Firestore fetch (commented to keep placeholder running without config)
    // const app = getApps().length ? getApps()[0] : initializeApp({
    //   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    //   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    //   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    //   appId: import.meta.env.VITE_FIREBASE_APP_ID
    // })
    // const db = getFirestore(app)
    // const ref = doc(db, 'owner', 'profile')
    // getDoc(ref).then((snap) => {
    //   if (snap.exists()) {
    //     setSample(snap.data())
    //     setStatus('Connected to Firestore and loaded owner profile.')
    //   } else {
    //     setStatus('Connected, but no owner/profile document found yet.')
    //   }
    // }).catch((e) => setStatus(`Error: ${e.message}`))

    // Placeholder UX
    const t = setTimeout(() => {
      setStatus('Ready: Add your Firebase config to load live owner data here.')
      setSample({ name: 'Alex Johnson', role: 'Full‑Stack Developer' })
    }, 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="text-sm text-blue-200/80">{status}</div>
      {sample && (
        <div className="mt-3 text-blue-100">
          <div className="font-semibold">Sample Owner</div>
          <div className="text-sm opacity-80">{sample.name} — {sample.role}</div>
        </div>
      )}
      <div className="mt-4 text-xs text-blue-200/60">
        Firestore only. No paid database services required.
      </div>
    </div>
  )
}
