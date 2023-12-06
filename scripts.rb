scripts = {
  :lint => `bundle exec rubocop -x`,
  :start => `bundle exec rerun main.rb`
}

ARGV.each do |a|
  puts scripts.fetch(a.to_sym)
end
