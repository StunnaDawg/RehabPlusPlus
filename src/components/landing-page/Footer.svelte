<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-svelte';
  </script>
  
  <footer class="bg-primary text-primary-foreground">
    <div class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="space-y-4">
          <h2 class="text-lg font-bold tracking-tight">RehabPlus</h2>
          <p class="text-sm">Empowering your clinic with streamlined rehabilitation solutions</p>
        </div>
        <div>
          <h3 class="text-lg font-bold tracking-tight mb-4">Company</h3>
          <ul class="space-y-2">
            <li><a href="/about" class="text-sm font-medium hover:underline">About Us</a></li>
            <li><a href="/privacy-policy" class="text-sm font-medium hover:underline">Privacy Policy</a></li>
            <li><a href="/terms-of-service" class="text-sm font-medium hover:underline">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold tracking-tight mb-4">Product</h3>
          <ul class="space-y-2">
            <li><a href="/documentation" class="text-sm font-medium hover:underline">Documentation</a></li>
            <li><a href="/pricing" class="text-sm font-medium hover:underline">Pricing</a></li>
            <li><a href="/features" class="text-sm font-medium hover:underline">Features</a></li>
            <li><a href="/changelog" class="text-sm font-medium hover:underline">Changelog</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold tracking-tight mb-4">Support</h3>
          <ul class="space-y-2">
            <li><a href="/blog" class="text-sm font-medium hover:underline">FAQ</a></li>
            <li><a href="/faq" class="text-sm font-medium hover:underline">Email</a></li>
          </ul>
        </div>
        
      </div>
      <div class="flex justify-between items-center mt-8 pt-8 border-t border-primary-foreground/10">
        <p class="text-sm text-left">&copy; {new Date().getFullYear()} RehabPlus. All rights reserved.</p>
        
        <div class="flex space-x-4">
          <a href="https://facebook.com" class="hover:text-secondary" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="https://twitter.com" class="hover:text-secondary" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="https://instagram.com" class="hover:text-secondary" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="https://linkedin.com" class="hover:text-secondary" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  </footer>