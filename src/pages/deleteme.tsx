function deleteme() {
  return (
    <main className={'h-full '}>
      <div className="px-6">
        <div className="max-w-6xl mx-auto ">
          <h3 className="text-lg mt-4 text-white/60">
            To delete your account, send an email from the address linked to
            your account to the email address below.
          </h3>
          <a href="mailto:audun@gympal.com" className="mt-5 block underline">
            audun@gympal.com
          </a>
        </div>
      </div>
    </main>
  );
}

export default deleteme;
