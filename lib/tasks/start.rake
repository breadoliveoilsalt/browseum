
# This was command when Procfile.dev was just Procfile
# task :start do
#   exec 'foreman start -p 3000'
# end

namespace :start do
  task :development do
    exec 'heroku local -f Procfile.dev'
  end
end

desc 'Start development server'
task :start => 'start:development'
