export default function About() {
  return (
    <section id="about" className="py-12">
      <h3 className="text-2xl font-bold mb-4">About Me</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 text-slate-600">
          <p>
            I'm Aditya — currently pursuing a master's in Data Science,
            Analytics & Engineering at ASU (3rd semester). My day-to-day work
            blends algorithmic problem solving, building reliable ML systems,
            and designing scalable backend services. I enjoy turning research
            ideas into production features and optimizing systems for real user
            workloads.
          </p>

          <h4 className="mt-6 font-semibold">What I enjoy working on</h4>
          <ul className="mt-2 space-y-2 text-slate-600">
            <li>• End-to-end ML systems and MLOps</li>
            <li>• Low-latency distributed systems and microservices</li>
            <li>• Algorithm design & system design interviews</li>
            <li>• Resume-ready full-stack projects with infra</li>
          </ul>
        </div>

        <aside className="rounded-lg p-4 bg-white shadow">
          <h5 className="font-semibold">Quick facts</h5>
          <dl className="mt-3 text-sm text-slate-600 space-y-2">
            <div>
              <dt className="font-medium">Location</dt>
              <dd>Tempe, Arizona</dd>
            </div>
            <div>
              <dt className="font-medium">Education</dt>
              <dd>ASU — M.S. Data Science, Analytics & Engineering</dd>
            </div>
            <div>
              <dt className="font-medium">Roles sought</dt>
              <dd>SDE / ML / AI</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
